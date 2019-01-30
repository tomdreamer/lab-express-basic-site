//Setup (configution of your app)
//---------------------------------------------------------
//#########################################################

//connect this file to the express npm package
const express = require("express");

// the "app" variable represents our application and all its setting
//(all configuration an content will be defined through "app")
const app = express();

//the listen() method allows our program to accept connections from clients
//(this function will run when the program is ready for connections)
app.listen(5555, ()=>{
    console.log("Our express app is ready!");
});
//connect the "public/" forder to the express app
//(makes files inside "public/" available through aour server's domain")
app.use(express.static(__dirname + "/public"));
//("__dirname" is "directory name" - the folder where the current file is located)

//Route (content of your app)
//--------------------------------------------------------
//########################################################
app.get("/", (request, response, next)=>{
    //"response" controls what the client will receive when they visit this route
    response.sendFile(__dirname + "/views/homePage.html");
    //("__dirname" is "directory name" - the folder where the current file is)
});

app.get("/about", (request, response, next)=>{
    //"response" controls what the client will receive when they visit this route
    response.sendFile(__dirname + "/views/about.html");
    //("__dirname" is "directory name" - the folder where the current file is)
});

app.get("/imageGallery", (request, response, next)=>{
    //"response" controls what the client will receive when they visit this route
    response.sendFile(__dirname + "/views/imageGallery.html");
    //("__dirname" is "directory name" - the folder where the current file is)
});