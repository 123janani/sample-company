'use strict';
var db = require('../config');

//Department object create
var Department = function(dep){
    this.departmentName = dep.departmentName;
    this.departmentId = dep.departmentId;
    this.departmentHead = dep.departmentHead;
    this.phone = dep.phone;
    this.email   = dep.email;
    this.noOfEmployees = dep.noOfEmployees;
};
//get all
Department.getAllDepartments = function() {
    return new Promise(function (resolve, reject) {
        db.query("Select * from deparment",function (err, res) {
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                resolve(res);
            }
     });
  });
};

//get by id
Department.getDepartmentById = function (id) {
    return new Promise(function (resolve, reject) {
        db.query("Select * from deparment where departmentId = ? ", id, function (err, res) {
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                resolve(res);
            }
        });
    });
};

//create user
Department.addDepartment = function (newDep) {
    return new Promise(function (resolve, reject) {
        db.query("INSERT INTO deparment set ?", newDep, function (err, res) {
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                console.log(res.departmentId);
                resolve(res);
            }
        });
    })
};

//update department details
Department.updateDepartment = function(id, dep){
    return new Promise(function (resolve, reject) {
        db.query("UPDATE deparment SET departmentName=?,departmentId=?,departmentHead=?,phone=?,email=?,noOfEmployees=? " +
            "WHERE departmentId = ?", [dep.departmentName,dep.departmentId,dep.departmentHead,dep.phone,dep.email,dep.noOfEmployees, id],
            function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    reject(err);
                }else{
                    console.log("success: ", res);
                    resolve(res);
                }
        });
    });
};

//delete existing department
Department.deleteDepartment = function(id){
    return new Promise(function (resolve, reject) {
    db.query("DELETE FROM deparment WHERE departmentId = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            reject('error', err);
        }
        else{
            resolve('successful', res);
        }
    });
  });
};

module.exports= Department;