/**
 * Created by VAIO on 10/19/2016.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');


//vasl shodan be mongoose
var mongoose = require('mongoose');
//mongoose.connect('localhost27017/test');

var Schema=mongoose.Schema;

var assert=require('assert');
var app=express();




var regSchema = new Schema({
    firstname: {type:String},
    lastname: {type:String},
    email: {type:String},
    password:{type:String}
});


var regform = mongoose.model('regform', regSchema);




/* GET users listing. */


router.get('/', function(req, res, next) {

    console.log('here get');
    res.render('../views/login.ejs',{title:"mehran"})
    /* res.writeHead(200, {'content-type': 'text/html'});
    fs.readFile('./login.html', null, function (error, data) {
        if (error) {
            res.write("file Not Found");
        }
        else {
            res.write(data);
        }
        res.end();

    });*/

});





router.post('/submit',function(req,res,next)
{

    console.log('here post');


// Creating one user.
    var johndoe = new regform ({
        name: (req.Param('name')),
        email: (req.Param('email')),
        contact: (req.Param('contact')),
        message: (req.Param('message'))

    });

// Saving it to the database.
    johndoe.save(function (err) {if (err) console.log ('Error on save!')});


    console.log(johndoe.name);



});













module.exports = router;