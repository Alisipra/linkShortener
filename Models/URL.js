import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortCode: String,
  longURL: String,
});

export const URL = mongoose.model("shortURL", urlSchema);
