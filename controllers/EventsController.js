
class EventsController {
    
    static getEvents(req, res) {
        return res.send({data: 'a list of all events'})
    }
}

module.exports = EventsController;