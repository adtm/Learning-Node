const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my-giga-db");
mongoose.connection.on("open", () => console.log("Connected to Mongoose!"));

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
