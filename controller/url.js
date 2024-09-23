import { URL } from "../Models/URL.js";
import shortId from "shortid";

export const urlShort = async (req, res) => {
  //get both links short and long
  const longURL = req.body.longURL;
  const shortCode = shortId.generate();
  const shortURL = `http://localhost:3000/${shortCode}`;
  ///to save both long and short url in the db

  const newUrl = new URL({ shortCode, longURL });

  await newUrl.save();

  res.render("index.ejs", { shortURL });
};
export const getOriginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;
  const urlRecord = await URL.findOne({ shortCode });
  if (urlRecord) {
    res.redirect(urlRecord.longURL);
  } else {
    res.status(404).send("URL is not found");
  }
};
