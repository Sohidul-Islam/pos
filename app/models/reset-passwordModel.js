const sql = require("./db");

const reset = function (reset) {
  this.email = reset.email;
  this.password = reset.password;
  this.password1 = reset.password1;
  this.password2 = reset.password2;
};

reset.resetpass = (reset,result) => {
var pass = reset.password;
var pass1 = reset.password1;
var pass2 = reset.password2;
var email = reset.email;

// console.log(pass,email);
// console.log(pass1,email);
// console.log(pass2,email);
if(email && pass && pass1 && pass2){
    // console.log(`SELECT * FROM admin where email = ${email} and password = ${pass};`);
    if(pass1==pass2){
        sql.query(
            `SELECT * FROM admin where email = ? and password = ?;`,[email,pass],
           (err, res) => {
              if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
              } else {
                sql.query(
                    `update admin set password = '${pass1}' where email = '${email}' and password = '${pass}' `,
                   (error, response) => {
                      if (error) {
                        console.log("error: ", error);
                        result(null, error);
                        return;
                      } 
                     
                    }
                  );
                
              }

              result(null, res);
        
            }
          );
    }
    
}




};

module.exports = reset;
