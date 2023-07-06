const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

const { PORT, HOSTNAME } = require("./constants")

const { connect_database } = require("./models");
const { logger, multiLanguage, limiter, log_saver, helmet, compression, myCorsPolicy } = require("./middlewares");
const { docOptions } = require("./docs");
const { welcome, errorHandler, routeNotFound } = require("./errors");
const routes = require("./routes");

const port = process.env.PORT || PORT;
const host = process.env.HOST || HOSTNAME;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(multiLanguage())
app.use(logger());
app.use(helmet());
app.use(myCorsPolicy());
app.use(compression());
app.use(limiter());
app.use(log_saver());

app.all("/", welcome);
app.all("/api/docs", welcome);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(docOptions)));
app.use("/api/", routes);
app.use(errorHandler);
app.use(routeNotFound);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log("SERVER RUNNING AT " + host + ":" + port);
    connect_database();
});


module.exports = { app }