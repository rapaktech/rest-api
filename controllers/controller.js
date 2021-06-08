const User = require('../models/users');


exports.fetchAllUsers = (req, res) => {
    User.find({}, (err, foundUsers) => {
        if (err) return res.status(500).json({err});
        if (!foundUsers) return res.status(401).json({ message: "No users in database. Please create a user and try again." });
        return res.status(200).json({ message: "Users found successfully", foundUsers});
    });
}


exports.registerNewUser = (req, res) => {

    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) {
            return res.status(500).json({ err });
        } 
        if (existingUser) {
            return res.status(400)
                .json({ message:"A user with this email already exists, please try another email" });
        }
        User.create({
            name: req.body.name,
            country: req.body.country,
            email: req.body.email
        }, (err, newUser) => {
            if (err) console.log(err);
            return res.status(400)
            .json({ message:"User created succesfully", newUser });
        });
    });
};


exports.findUser = (req, res) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(500).json({err});
        if (!foundUser) return res.status(401).json({ message: "User does not exist. Please check and try again." });
        return res.status(200).json({ message: "User found successfully", foundUser});
    });
}

exports.updateUser = async (req, res) => {
    User.findOneAndUpdate({ email: req.body.email }, {
        name: req.body.name,
        country: req.body.country,
        email: req.body.email
    }, (err, foundUser) => {
        if (err) return res.status(500).json({err});
        if (!foundUser) return res.status(401).json({ message: "User does not exist. Please check and try again." });
        return res.status(200).json({ message: "User updated successfully"});
    });
}


exports.deleteUser = (req, res) => {
    User.findOneAndDelete({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(500).json({err});
        if (!foundUser) return res.status(401).json({ message: "User does not exist. Please check and try again." });
        return res.status(200).json({ message: "User deleted successfully"});
    });
}