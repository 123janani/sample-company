'use strict';
const user_model = require('../model/user.model');

exports.getAllUsers = (req, res) => {
    user_model.getAllUsers(req).then((users) => {
        res.status(200).send(users);
        console.log('res', users);
    }).catch(err =>{
        res.status(400).json(err);
    });
};

exports.getUserById = (req, res) => {
    var id = req.params.id;
    user_model.getUserById(id).then((user) => {
        res.status(200).send(user);
        console.log('res', user);
    }).catch(err =>{
        res.status(400).json(err);
    })
};

exports.getUsersInDepartment = (req, res) => {
    var id = req.params.depId;
    user_model.getUsersInDepartment(id).then((result) => {
        res.status(200).send(result);
    }).catch(err =>{
        console.error("error get department by id: " + err);
        res.status(400).json(err);
    })
};

exports.addNewUser = (req,res) => {
    var newUser = new user_model(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        user_model.addUser(newUser).then((err, user) => {
            res.json({message:"User added successfully!",data:user});
        }).catch(err =>{
            res.status(400).json(err);
        })
    }
};

exports.updateUser = (req, res) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        var id = req.params.id;
        user_model.updateUser(id, new user_model(req.body)).then((res) => {
            res.json({ data:res, message: 'user successfully updated' });
        }).catch(err =>{
            res.status(400).json(err);
        });
    }
};

exports.deleteUser = (req, res) => {
    user_model.deleteUser( req.params.id).then((dep) => {
        res.json({ data:dep, message: 'user successfully deleted' });
    }).catch(err => {
        res.status(400).json(err);
    })
};