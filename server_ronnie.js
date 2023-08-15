//npm init -y 
//npm i express
const data = [
    { id: 1, catName: 'fluffy' },
    { id: 2, catName: 'milky' },
    { id: 3, catName: 'cool cat' },
    { id: 4, catName: 'cat from the server' },
]

//step 1 require express
const express = require('express');

const cors = require('cors') //cross origin resource sharing
//allows the fe port to communicate to the backend
//tell our serer to run on a port on our comp
const PORT = 9000;

const app = express()//returns an obj
//for every request, use cors()
app.use(cors());

//the client aka the frontend sends a REQUEST, SERVER Ssends back a response
//RESTFUL conventions
//make some routes
//GET - read
//two arguments, the endpoint of the URL | callback function
//callback function takes in two arguments
app.get('/cats', (request, response) => {
    response.json(data) //automatically sets the content type, and handles the JSON  serialzaiton
});

//POST - create
//PUT / PATCH - update
//DELETE - delete

//port, second function that just does a log so i know it's runnin
app.listen(PORT, () => console.log(`server is running on ${PORT}`))
//run the server with node <filename>.js

