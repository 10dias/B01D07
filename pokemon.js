/**
* @author Thassio Victor <tvmcarvalho@gmail.com>
* @desc Buscar informações sobre pokémon
* @license MIT
    */

'use strict';

const readline = require('readline');
const http = require('http');

const API = "http://pokeapi.co/api/v2/pokemon/";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pokemon = "Forneça um ID, de 0 a 720, para buscar informações sobre um Pokémon: ";

rl.question(pokemon, function(ans) {
    rl.close();
    const pokeid = ans.trim();
    if (isNaN(Number(pokeid)) || pokeid < 1 || pokeid > 720) {
        console.error("Não é um ID válido");
        console.error("Abortando");
        process.exit();
    }

    http.get(API + pokeid + "/", function(res) {
        let finalData = "";

        res.on("data", function(d) {
            finalData += d;
        });

        res.on("end", function() {
            finalData = JSON.parse(finalData);

            console.log(capitalize(finalData.name));
        });
    });
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

