const login = require("../models/loginModel");
const express = require("express");

exports.logininfo = (req, res) => {
    if(req.session.loggedin == true){
        res.redirect("/home");
    }
    login.getloginData((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                  err.message || "Some error occured in inventoryReport function",
              });
        }else{
            res.render("./pages/login",
                { existMailError: req.flash("existingMailchecker"), successMailChecker: req.flash("successMailChecker"), unauthorizeUser: req.flash("unauthorizeUser") }
            );
        }
        
      });
   
};
exports.checkItout = (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    console.log("req.email ",email);
    console.log("req.pass ",pass);

    if(email && pass){
        login.checklogin(req.body,(err, data) => {
            if (data.length > 0) {
				req.session.loggedin = true;
				req.session.username = data[0].username;
				req.session.email = req.body.email;
                req.flash("successMailChecker", `Successfully Loged Out`);
				res.redirect("/home");
			} else {
                req.flash("unauthorizeUser", `Email and Password does not match`);
                res.redirect("/");
			}
            
          });
    }else{
        req.flash("existingMailchecker", `Pleas enter your email and password`);
        res.redirect("/");
    }
    
   
   
};