const mongoose = require("mongoose");

const instance = new mongoose.Schema(
  { 
    objectApp: {
      type: String,
      min: 2,
      max: 20,
      required: true,
      lowercase: true,
      unique: true,
    },
    categoryApp: {
      type: String,
     
      enum: ["Mensajeria","Redes Sociales","Entretenimiento"],
      default: "Mensajeria",
    }
  },
  {
    timestamps: true,
  }

);
const modelName = "Platform";

module.exports = mongoose.model(modelName, instance);
