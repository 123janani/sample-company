const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller');

// Retrieve all departments
router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUserById);
//get department data by user
router.get('/:id/dep',userController.getDepartmentByUser);

//add new user
router.post('/',userController.addNewUser);

//update existing user
router.put('/:id',userController.updateUser);

//delete user by id
router.delete('/:id',userController.deleteUser);

module.exports = router;