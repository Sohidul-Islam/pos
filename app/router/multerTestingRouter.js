const express = require("express");
const multertester = require("../controllers/multerTestingController");
const multer = require("../controllers/multerConfig");

const router = express.Router();

router.route("/").get(multertester.testingMulter);
router.route("/").post(multer.upload.single("myfile"), multertester.testingMulterUpload);

module.exports = router;