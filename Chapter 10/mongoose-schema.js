const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Widget = new Schema({
  sn: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  desc: String,
  price: Number
});

module.exports = mongoose.model("Widget", Widget);
