import express from 'express';
import mongoose from 'mongoose';
import { shortUrl,getOriginalUrl } from "./Controllers/url.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://farashsaquib97:763n6pD5orhkrPpO@cluster0.42dh53w.mongodb.net/", {dbName: "Node_Mastery_Course"}).then(() => console.log("MongoDB connected successfully....!")).catch((err) => console.log(err));

// rendering the ejs file
app.get('/', (req, res) => {
  res.render('index.ejs', {shortUrl : null});
});

// shorting url Logic
app.post('/short',shortUrl);

// redirec to original URL using short code :- dynamic route
app.get('/:shortCode', getOriginalUrl);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});