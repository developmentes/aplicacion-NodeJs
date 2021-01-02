'use strict'

import { Mongoose, Schema as _Schema } from 'mongoose';
const Schema = _Schema;

let UserSchema = Schema({

name: String,
surname:String,
email:String,
password:String,
role:String,
image:String

});

module.exports = Mongoose.model('User',UserSchema);


