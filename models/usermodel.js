/**
 * Created by VAIO on 10/19/2016.
 */
var mangoose = require('mongoose');
var Schema  = mongoose.Schema;
var connection = mongoose.connection
var autoincrement = require('mongoose-auto-increment')
autoincrement.initialize(connection);
var userdata = new Schema({
    id:String,
    username:String,
    password:String,
    email:String,
    access:String
});
userdata.plugin(autoincrement.plugin,{
    model:'usermodel',
    field:'id',
    startAt: 1,
    incrementBy:1
});

module.exports = mongoose.model('usermodel',userdata);