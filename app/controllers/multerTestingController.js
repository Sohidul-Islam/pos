exports.testingMulter = (req, res) => {
  res.render("./pages/multerTesting", {
    role: req.session.username
  })
};


exports.testingMulterUpload = (req, res) => {
  console.log(req.file);
  console.log("file here");
}