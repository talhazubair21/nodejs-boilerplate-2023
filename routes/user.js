const { userController } = require("../controllers");
const { errorCatcher } = require("../errors")
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  -name
 *                  -email
 *              properties:
 *                  name:
 *                      type: string
 *                      description: Name of admin
 *                  email:
 *                      type: string
 *                      description: Email for the admin
 *              example:
 *                  name: Muhammad Talha Zubair
 *                  email: talha@gmail.com
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User Routes
 */


/**
 * @swagger
 * /api/user/:
 *      post:
 *          summary: Create User
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      example:
 *                          name: Jordan
 *                          email: Micheal
 *          responses:
 *              201:
 *                  description: User Inserted
 *              500:
 *                  description: Server Not Responding
 * */

router.post("/user", errorCatcher(userController.createUser));

/**
 * @swagger
 * /api/user/:id:
 *         get:
 *          summary: Get User Details
 *          tags: [User]
 *          parameters:
 *              - in: path
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: User Successfully Deleted
 *              500:
 *                  description: Server Not Responding
*/
router.get("/user/:id", errorCatcher(userController.getUser));

/**
 * @swagger
 * /api/user/:id:
 *      delete:
 *          summary: Delete a User
 *          tags: [User]
 *          parameters:
 *              - in: path
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: User Successfully Deleted
 *              500:
 *                  description: Server Not Responding
*/
router.delete("/user/:id", errorCatcher(userController.removeUser));

/**
 * @swagger
 * /api/user/:id:
 *      put:
 *          summary: Update User
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      example:
 *                          email: abc@gmail.com
 *                          name: asdasd
 *          responses:
 *              200:
 *                  description: Assignment Submitted Successfully
 *              500:
 *                  description: Server Not Responding
 * */

router.put("/user/:id", errorCatcher(userController.updateUser));

/**
 * @swagger
 * /api/users:
 *      get:
 *          summary: Get All Users
 *          tags: [User]
 *          responses:
 *              200:
 *                  description: List of Users
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 *              500:
 *                  description: Server Not Responding
*/
router.get("/users", errorCatcher(userController.getUsers));

module.exports = router;