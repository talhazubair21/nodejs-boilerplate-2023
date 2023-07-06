const mongoose = require("mongoose");
const { DATABASE_URL, DATABASE_NAME } = require("../constants");

const User = require("./user");

const connect_database = () => {
    mongoose.connect(DATABASE_URL + DATABASE_NAME, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
        return console.log(`DATABASE CONNECTION SUCCESSFUL !`);
    }).catch(error => {
        console.log("Error connecting to database: ", error.message);
        return process.exit(1);
    });
};

module.exports = {
    connect_database,
    User
}