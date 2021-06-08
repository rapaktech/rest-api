const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.fetchAllUsers);

router.post('/users', controller.registerNewUser);

router.get('/users', controller.findUser);

router.put('/users', controller.updateUser);

router.delete('/users', controller.deleteUser);

module.exports = router;