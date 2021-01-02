'use strict'

import { Mongoose, Schema as _Schema } from 'mongoose';
const Schema = _Schema;

let SongSchema = Schema({

numbe: String,
name:String,
duration:String,
file:String,
album: {type: Schema.ObjectId, ref:'Album'}

});

module.exports = Mongoose.model('Song',SongSchema);


