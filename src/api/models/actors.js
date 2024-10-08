const mongoose = require('mongoose');


const actorSchema = new mongoose.Schema({

     name: { type: String, required: true },
     image: { type: String, required: true },
     birthdate: { type: Date, required: true },
     seasons: [{ type: mongoose.Types.ObjectId, ref: 'seasons', required: false, unique: true }]
},
     {
          timestamps: true,
          collection: 'actors'
     });


const Actor = mongoose.model('actors', actorSchema, 'actors');

module.exports = Actor;