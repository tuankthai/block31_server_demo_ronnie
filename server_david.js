const express = require("express");

const pokemonData = require("./database.json")
const cors = require('cors');      //cross origin resource sharing. allows front end comm to backend

const PORT = 8080;

const app = express()//invoke express reutrns obj

app.use(cors()); //it allows the frontend on a different port to connect. react port 3000

app.get("/", (req, res) => {
    console.log(pokemonData)

    res.send("Hello")
});

app.get("/all-pokemons", (req, res) => {
    // res.send(JSON.stringify(pokemonData))
    res.json(pokemonData)
});

app.get('/hello', (req, res) => {
    res.json('hi')
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} successsfully`)

})