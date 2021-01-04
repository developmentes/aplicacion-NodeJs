'use strict'

import { Mongoose, Schema as _Schema } from 'mongoose';
const Schema = _Schema;

let AlbumSchema = Schema({

titulo: String,
description:String,
year: Number,
image:String,
artist:{ type: Schema.ObjectId, ref: 'Artist'} //esto es parecido a la foreign key de mySql ,ya que 
                                                //referenciamos e documento artista del modulo models

});

module.exports = Mongoose.model('Album',AlbumSchema);//Album es el nombre que le daremos 
                                                        //al objeto que utilizaremos para ocupar 
                                                        //la informacion de ArtistSchema que tiene la informacion del artista 

