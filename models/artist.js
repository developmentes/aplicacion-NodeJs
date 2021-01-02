'use strict'

import { Mongoose, Schema as _Schema } from 'mongoose';
const Schema = _Schema;

let ArtistSchema = Schema({

name: String,
description:String,
image:String

});

module.exports = Mongoose.model('Artist',ArtistSchema);


