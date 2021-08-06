const e = require("express");
const sql = require("./db");

const login = function (admin) {
    this.email = admin.email;
    this.password = admin.password;
  };
  
  login.getloginData = (result) => {
     
    sql.query(
      `SELECT * FROM admin;`,
     (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        } else {
          console.log("Info ", res);
          
        }
        result(null,res);
      }
    );
  };
  login.checklogin = (admin,result) => {
     var email  = admin.email;
     var pass  = admin.password;
    console.log(`SELECT * FROM admin where email = ${email} and password = ${pass};`);
     if (email && pass) {
      sql.query(
        `SELECT * FROM admin where email = ? and password = ?;`,[email,pass],
       (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          } else {
            console.log("Info ", res);
            
          }
          result(null,res);
        }
      );
     }else{

     }
   
  };

  module.exports = login;