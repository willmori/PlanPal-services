const { db } = require('../firebase');

class UsersController {

    static usersRef = db.collection('users');

    static async addUser(req, res) {
        try {
            const docRef = await UsersController.usersRef.add(req.body);
            res.status(201).send({ id: docRef.id, ...req.body });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: error.message });
        }
    }
    
    static async getUsernames(req, res) {
        try {
            const users = await UsersController.usersRef.get();
            let documents = [];
            users.forEach(doc => {
            documents.push(doc.data().username);
            });
            
            res.status(200).send(documents);
        } catch (error) {
            console.error("Error getting documents", error);
            res.status(500).send(error);
        }
    }

    static async getEmails(req, res) {
        try {
          const users = await UsersController.usersRef.get();
          let documents = [];
          users.forEach(doc => {
            documents.push(doc.data().email);
          });
          
          res.status(200).send(documents);
        } catch (error) {
          console.error("Error getting documents", error);
          res.status(500).send(error);
        }
    }
    
}

module.exports = UsersController;