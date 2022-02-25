
// **************
// *Get_method  *
// **************
// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.get('/index.html', function (req, res) {
//   res.sendFile(__dirname + "/" + "index.html");
// })

// app.get('/process_get', function (req, res) {

//   response = {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name
//   };

//   console.log(response);
//   res.end(JSON.stringify(response));
// })

// var server = app.listen(5000, function () {
//   var host = server.address().address
//   var port = server.address().port

//   console.log("Example app listening at http://%s:%s", host, port)
// })

// **************
// *Post_method *
// **************

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('public'));
// app.get('/index.html', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.html");
// })

// app.post('/process_post', urlencodedParser, function (req, res) {

//   response = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };
// console.log(response);
// res.end(JSON.stringify(response));
// })
// var server = app.listen(5000, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("Example app listening at http://%s:%s", host, port)
// })

// **************
// *File_Upload *
// **************

var express = require("express");
var multer = require("multer");

var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

var uploads = multer({ storage: storage }).single("myfile");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/file-upload.html");
});

app.post("/uploaded", function (req, res) {
  uploads(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file");
    }
    res.end("File is uploaded successfully!");
  });
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});