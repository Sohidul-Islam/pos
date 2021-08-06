const updatepass = require("../models/reset-passwordModel")
exports.resetdata = (req, res) => {
   res.render("./pages/reset-password",{ existMailError: req.flash("existingMailchecker"), successMailChecker: req.flash("successMailChecker"), unauthorizeUser: req.flash("unauthorizeUser") });
};

exports.resetpassword = (req,res)=>{
    console.log("reset pass: ",req.body);
    var email = req.body.email;
    var pass = req.body.password;
    var pass1 = req.body.password1;
    var pass2 = req.body.password2;
    if(email && pass && pass1 && pass2 ){

        if(pass1 == pass2){
            updatepass.resetpass(req.body,(err,data)=>{
                if (data.length > 0) {
                  
                    req.flash("successMailChecker", `Successfully Reset Password`);
                    // setTimeout(function(){
                       
                    // },2000);
                    res.redirect("/");
                } else {
                    req.flash("unauthorizeUser", `Email and Password does not match`);
                    res.redirect("/reset-password");
                }
                // else res.send(data);
            })
        }
        else{
            req.flash("unauthorizeUser", `Confirm password doesnot match`);
            res.redirect("/reset-password");
        }
        
    }else{
       req.flash("existingMailchecker", `Please Fill The Fields`);
        res.redirect("/reset-password");
    }
    
}