// const express = require("express")  ~ works without a hitch
// in deploeyment use nodemon and after deployed use node
// in package.json scripts remove   {  "test": "echo \"Error: no test specified\" && exit 1" } type { "dev":"nodemon server.js" } now you can run server that auo updates with every change you make by typing { npm run dev } in your terminal 
// or  { "start":"node server.js" } in package.json to run server in mode that doesn't update with every small change you make you need to restart the server in terminal to update changes you make .it is when you have to kill terminal again as it is not updated instantaneously when updated something on server then to run this in terminal you need to type { npm run start } instead of { node server.js } to run 
import express from "express"; // use "type":"module",  in package.json
// although my file is camel case but in windows it reads in lower cae and hence i am using lower case loginrouter.js here
import loginRoutes from "./routes/loginroutes.js"
//call and import connectDB
import {connectDB} from "./config/logindb.js"

const app=express(); /*express is just method  */
//now parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB();

app.use("/login/account", loginRoutes);
// endpoint - combination od URL + HTTP that lets client/user interact with specifiv resource

//status 101 is information , 201 is ok , 202 is created , 300 is redirection , 401 bad request or unauthorized , 402 - payment required , 403 is forbidden , 404 is not found , 429 is too many requests , 500 is internal server error , 503 is server is overloaded temporarily or down something happened

/* so all these put in loginroutes.js
// loggin in an  account
app.get("/login/account", (req ,res) => {
    res.status(200).send("enter credentials");
});

// logging in

app.post("/login/account", (req ,res) => {
    res.status(402).send("login credentials are wrong");
});


// login an account
app.post("/login/account/:id", (req ,res) => {
    res.status(202).send("welcome id your account is created");
});

// update credentials of an account
app.put("/login/account/:id", (req ,res) => {
    res.send("account credentials updated");
});

//create account
app.get("/login/account/create", (req ,res) => {
    res.status(200).send("enter credentials");
});
//create account
app.post("/login/account/create/:id", (req ,res) => {
    res.status(200).send("account created welcome user id");
});

//delete the account
app.delete("/login/account/:id", (req ,res) => {
    res.status(202).send("account deleted");
});
*/


app.listen(5500,() => {
    console.log("server started on PORT:5500");
}); /*port value depends on you*/