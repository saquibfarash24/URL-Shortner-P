import { Url } from "../Models/Url.js";
import shortid from "shortid";



// Function to handle URL shortening
export const shortUrl = async (req, res) => {
 const longUrl = req.body.longUrl;
const shortCode = shortid.generate(); // Generate a unique short code

const shortUrl = `http://localhost:4000/${shortCode}`; // Construct the short URL

// save the URL to the database
const newUrl = new Url({shortCode, longUrl})
await newUrl.save();

console.log("Short saved = ", newUrl);

res.render("index.ejs", {shortUrl}); // Render the index page with the short URL                

}
export const  getOriginalUrl = async (req, res) => {
const shortCode = req.params.shortCode; // Get the short code from the request parameters

// find in database 
const originalUrl = await Url.findOne({shortCode}); // Find the original URL using the short code
if(originalUrl){
 res.redirect(originalUrl.longUrl)
}else{
    res.json({message:"URL not found"}); // Placeholder response, replace with actual logic to retrieve original URL

 }
}    