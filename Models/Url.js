import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
   shortCode:String,
   longUrl:String,
});

export const Url = mongoose.model("Url", urlSchema);
// Exporting the Url model to use it in other files