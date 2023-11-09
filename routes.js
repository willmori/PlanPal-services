const express = require("express");
const routes = express.Router();

const EventsController = require("./controllers/EventsController")

routes.get("/events", EventsController.getEvents);

module.exports = routes;