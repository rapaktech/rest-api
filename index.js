const express = require('express');

const app = express();

const port = process.env.PORT;

const { MongoClient } = require('mongodb');

const connectionString = process.env.MONGODB_URL;

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json());



// Fetching all users
app.get('/', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({ message: err });
        const db = connectedClient.db();
        db.collection("people").find({}).toArray((err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            return res.status(200).json({ message: "Request Successful. Here's your requested data.", data: result });
        });
    });
});


// Create a new user
app.post('/users', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({ message: err });
        const db = connectedClient.db();
        db.collection("people").insertOne({
            name: req.body.name,
            email: req.body.email,
            country: req.body.country
        }, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            return res.status(200).json({ message: "New user added to database!" });
        });
    });
});


// fetch a single user
app.get('/users', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({ message: err });
        const db = connectedClient.db();
        db.collection("people").findOne({ name: req.body.name }, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            return res.status(200).json({ message: "Request Successful. Here's your requested data.", data: result });
        });
    });
});


// update a single user
app.put('/users', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({ message: err });
        const db = connectedClient.db();
        db.collection("people").updateOne({ name: req.body.name }, {
            $set: {
            email: req.body.email,
            country: req.body.country
            }
        }, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            } else {
                return res.status(200).json({ message: "User data updated successfully", data: result });
            }
        });
    });
});


// delete a single user
app.delete('/users', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({ message: err });
        const db = connectedClient.db();
        db.collection("people").findOne({ name: req.body.name }, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            } else {
                db.collection("people").deleteOne(result);
            return res.status(200).json({ message: "User deleted Successfully"});
            }
        });
    });
});


app.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
});