const { db } = require('../firebase');

class EventsController {
    
    static async getEvents(req, res) {
        try {
            const collectionRef = db.collection('events');
            const snapshot = await collectionRef.get();
        
            let documents = [];
            snapshot.forEach(doc => {
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