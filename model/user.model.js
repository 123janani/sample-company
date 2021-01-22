'use strict';
var db = require('../config');

//user object create
var user = function(user1){
    this.firstname = user1.firstname;
    this.lastname = user1.lastname;
    this.userId = user1.userId;
    this.departmentName = user1.departmentName;
    this.departmentId   = user1.departmentId;
    this.phone = user1.phone;
    this.email = user1.email;
    this.address = user1.address;
    this.dob = user1.dob;
    this.age = user1.age;
};

//get all
user.getAllUsers = function () {
    return new Promise(function (resolve, reject) {
    db.query("Select * from user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            reject('error', err);
        }
        else{
            console.log('dep : ', res);
            resolve(res, 'successful');
        }
    });
  });
};

//get by id
user.getUserById = function (id) {
    return new Promise(function (resolve, reject) {
    db.query("Select * from user where userId = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            reject(err, 'error');
        }
        else{
            resolve(res,'success');
        }
    });
  });
};

//get by dep by user
user.getDepartmentByUser = function (id) {
    console.log('user get dep data');
    return new Promise(function (resolve, reject) {
        console.log('user get dep data');
        db.query("SELECT user.firstname,user.departmentId, user.departmentName" +
            " FROM user where userId = ?", id, function (err, rows) {
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                console.log("data at model: ", rows);
                resolve(rows,'success');
            }
        });
    });
};


//create new user
user.addUser = function (newUser) {
    return new Promise(function (resolve, reject) {
    db.query("INSERT INTO user set ?", newUser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            reject(err, null);
        }
        else{
            console.log(res.userId);
            resolve.json(res.userId,'result');
        }
    });
  });
};

//update department details
user.updateUser = function(id, user){
    return new Promise(function (resolve, reject) {
    db.query("UPDATE user SET firstname=?,lastname=?,userId=?,departmentName=?,departmentId=?,phone=?,email=?" +
        "address=?,dob=?,age=? " +
        "WHERE userId = ?", [user.firstname,user.lastname,user.userId,user.departmentName,user.departmentId,
            user.phone,user.email,user.address,user.dob,user.age, id],
        function (err, res) {
            if(err) {
                console.log("error: ", err);
                reject(err, 'err');
            }else{
                resolve(res);
            }
        });
    });
};
//delete existing department
user.deleteUser = function(id, result){
    return new Promise(function (resolve, reject) {
    db.query("DELETE FROM user WHERE userId = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            reject(err,'error');
        }
        else{
            resolve(res);
        }
    });
  });
};

module.exports= user;