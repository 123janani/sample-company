const express = require('express')
const router = express.Router()
const departmentController = require('../controller/department.controller');

// Retrieve all departments
router.get('/',departmentController.getAllDepartments);
router.get('/:id',departmentController.getDepartmentById);

//add new department
router.post('/',departmentController.addNewDepartment);

//update existing department
router.put('/:id',departmentController.updateDepartment);

//delete department by id
router.delete('/:id',departmentController.deleteDepartment);

module.exports = router;