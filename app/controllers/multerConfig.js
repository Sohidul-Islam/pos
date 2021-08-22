const express = require("express");
const app = express();
// multer
var multer = require("multer");
var path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        let fileName = `product-${req.body.prod_n}-${Date.now()}${path.extname(file.originalname)}`;
        fileName = fileName.split(' ').join('');
        fileName = fileName.replace(/\s"/g, '');
        cb(null, fileName);
    }
})

exports.upload = multer({
    storage: storage
});


// module.exports = upload;