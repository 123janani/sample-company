'use strict';
const Department_model = require('../model/department.model');

exports.getAllDepartments = (req, res) => {
    Department_model.getAllDepartments(req).then( (data)=> {
        res.status(200).send(data);
    }).catch(err => {
        console.error("error get all department data: " + err);
        res.status(400).json(err);
    });
};

exports.getDepartmentById = (req, res) => {
    var id =req.params.id;
    Department_model.getDepartmentById(id).then((result) => {
        res.status(200).send(result);
    }).catch(err =>{
        console.error("error get department by id: " + err);
        res.status(400).json(err);
    })
};

exports.addNewDepartment = (req,res) => {
    var newDep = new Department_model(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Department_model.addDepartment(newDep).then((dep)=> {
            res.status(200);
            res.json({message:"New Department added successfully!",data:dep.affectedRows});
        }).catch(err =>{
            console.error("error when add new department: " + err);
            res.status(500).json(err);
        })
    }
};

exports.updateDepartment = (req, res)=> {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        var id =req.params.id;
        Department_model.updateDepartment(id, new Department_model(req.body)).then( (res)=> {
            res.json({ message: 'Department data successfully updated' , data: res.affectedRows});
        }).catch(err =>{
            res.status(400).json(err);
        })
    }
};

exports.deleteDepartment = (req, res) =>{
    Department_model.deleteDepartment( req.params.id).then((dep)=> {
        res.json({ message: 'Department successfully deleted. deleted data: ' , data:dep});
    }).catch(err =>{
        res.status(400).json(err);
    })
};