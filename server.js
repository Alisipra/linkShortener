import express from "express";
import mongoose from "mongoose";
import { urlShort, getOriginalUrl } from "./controller/url.js";
//db conncection
mongoose
  .connect(
    "mongodb+srv://alisipra783:mwWxmU1mQDR9nNoy@cluster0.orovc.mongodb.net/",
    { dbName: "linkShortener" }
  )
  .then((res) => console.log("MongoDB is connected...."))
  .catch((error) => console.log(error));
const app = express();
//static rendering of files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

///routes
app.get("/", (req, res) => {
  res.render("index.ejs", { shortURL: null });
});
app.get("/:shortCode", getOriginalUrl);
app.post("/shorten", urlShort);

app.listen(3000, () => {
  console.log("Server is listening");
});
