const { db } = require('../firebase');

class EventsController {
    
    static async getMyEvents(req, res) {
      try {
        const eventsRef = db.collection('events');
        const myEvents = await eventsRef.where('members', 'array-contains', req.params.emailId).get();
        
        let documents = [];
        myEvents.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        
        res.status(200).send(documents);
      } catch (error) {
        console.error("Error getting documents", error);
        res.status(500).send(error);
      }
    }
    
}

module.exports = EventsController;