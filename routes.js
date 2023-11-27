const express = require("express");
const routes = express.Router();

const EventsController = require("./controllers/EventsController");
const UsersController = require("./controllers/UsersController");

//all routes will go here

//EVENTS ROUTES
routes.get("/myEvents/:emailId", EventsController.getMyEvents);


//USERS ROUTES
routes.get("/usernames", UsersController.getUsernames);
routes.get("/emails", UsersController.getEmails);
routes.post("/addUser", UsersController.addUser);

module.exports = routes;