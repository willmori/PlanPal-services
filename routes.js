const express = require("express");
const routes = express.Router();

const EventsController = require("./controllers/EventsController")

//all routes will go here
routes.get("/events", EventsController.getEvents);

module.exports = routes;