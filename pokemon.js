/**
* @author Thassio Victor <tvmcarvalho@gmail.com>
* @desc Buscar informações sobre pokémon
* @license MIT
    */

'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pokemon = "Forneça o nome de um pokémon: ";

rl.question(pokemon, function(ans) {
    rl.close();
    console.log(ans);
});

