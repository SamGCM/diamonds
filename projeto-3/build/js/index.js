"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_1 = require("./classes/pokemon");
const pokemon_2 = require("./data/pokemon");
let poke = new pokemon_1.CPokemon(pokemon_2.pokemon.id, pokemon_2.pokemon.name, pokemon_2.pokemon.base_experience, pokemon_2.pokemon.height, pokemon_2.pokemon.weight, pokemon_2.pokemon.legendary, new Date(pokemon_2.pokemon.firstAppearance), pokemon_2.pokemon.abilities, pokemon_2.pokemon.stats);
console.log(poke.getName);
console.log(poke.getStats);
console.log(poke.addStat({
    base_stat: 1,
    stat: "test"
}));
console.log(poke.removeStat("test"));
