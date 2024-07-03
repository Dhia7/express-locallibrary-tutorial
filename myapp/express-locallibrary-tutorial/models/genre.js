const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema ({
    genre:{ type: String, minlenght: 3, maxlenght: 100},
    name: { type: String, required: true, maxLength: 100 },
});


// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genre/${this._id}`;
  });

  
GenreSchema.virtual("name_formatted").get(function () {
    return `${this.genre._id}`;
  });
  
  // Export model
  module.exports = mongoose.model("Genre", GenreSchema);