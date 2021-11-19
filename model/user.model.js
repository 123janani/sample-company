'use strict';
var db = require('../config');

//user object create
var user = function(dbUser){
    this.firstname = dbUser.firstname;
    this.lastname = dbUser.lastname;
    this.userId = dbUser.userId;
    this.departmentName = dbUser.departmentName;
    this.departmentId   = dbUser.departmentId;
    this.phone = dbUser.phone;
    this.email = dbUser.email;
    this.address = dbUser.address;
    this.dob = dbUser.dob;
    this.age = dbUser.age;
};

//get all
user.getAllUsers = function () {
    return new Promise( (resolve, reject)=> {
    db.query("Select * from user",  (err, res) => {
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
user.getUserById =  (id) => {
    return new Promise( (resolve, reject)=> {
    db.query("Select * from user where userId =? ", id, (err, res)=> {
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
user.getUsersInDepartment =  (id) => {
    return new Promise( (resolve, reject) => {
        db.query("select * from user where departmentId =? ", id, (err, rows)=> {
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                console.log("data at model: ",id, rows);
                resolve(rows,'success');
            }
        });
    });
};


//create new user
user.addUser =  (newUser) => {
    return new Promise( (resolve, reject)=> {
    db.query("INSERT INTO user set ?", newUser,  (err, res)=> {
        if(err) {
            console.log("error: ", err);
            reject(err, null);
        }
        else{
            console.log(res.userId);
            resolve(res.userId,'result');
        }
    });
  });
};

//update department details
user.updateUser = (id, user) =>{
    return new Promise( (resolve, reject)=> {
    db.query("UPDATE user SET firstname=?,lastname=?,userId=?,departmentName=?,departmentId=?,phone=?,email=?" +
        "address=?,dob=?,age=? " +
        "WHERE userId=?", [user.firstname,user.lastname,user.userId,user.departmentName,user.departmentId,
            user.phone,user.email,user.address,user.dob,user.age, id],
         (err, res)=> {
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
user.deleteUser = (id) => {
    return new Promise( (resolve, reject) => {
    db.query("DELETE FROM user WHERE userId = ?", [id], (err, res)=> {
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

module.exports= user;
