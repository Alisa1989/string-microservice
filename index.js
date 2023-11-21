const bodyParser = require('body-parser')
// Importing express module 
const express = require("express") 
const app = express() 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) // for parsing application/json
  
// Handling GET / request 
app.get("/", (req, res) => { 
    res.send("This is the express server") 
}) 
  
// Handling GET /hello request 
app.post("/concatenate", (req, res) => { 
    const {strings} = req.body
    let i = 0;
    let return_string = "";
    while (i < strings.length) {
        return_string += strings[i];
        i++;
    }
    res.status(200).json({new_string: return_string}); 
}) 
  
// Server setup 
app.listen(3000, () => { 
    console.log("Server is Running") 
}) 