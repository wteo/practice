const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const members = require("../../Members");
const router = express.Router();

const pokemon = [{
    species : "pikachu", 
    type    : "electric"
}, {
    species : "charizard",
    type    : ["flying", "fire"]
}, {
    species : "dragonite",
    type    : "dragon"
}
];

router.get("/", (req, res) => {
    res.send(pokemon);
})

// To select a single pokemon
router.get("/:species", (req, res) => {
    const found = pokemon.some(poke => poke.species === req.params.species);
    if(found) {
        res.json(pokemon.filter(poke => poke.species === req.params.species));
    } else {
        res.status(400).json({message: `${req.params.species} not found`});
    }
});

// To create new Pokemon
router.post("/", (req, res) => {
    const newPokemon = {
        species : req.body.species,
        type    : req.body.type
    }

    if (!newPokemon.species || !newPokemon.type) {
        return res.status(400).json({message: "Not a valid pokemon."});
    }
    pokemon.push(newPokemon);
    res.json(pokemon);
});

// To update pokemon
router.put("/:species", (req, res) => {
    const found = pokemon.some(poke => poke.species === req.params.species);
    if (found) {
        const updatedPokemon = req.body;
        pokemon.forEach(poke => {
            if (poke.species === req.params.species) {
                poke.species = updatedPokemon.species ?  updatedPokemon.species : poke.species;
                poke.type = updatedPokemon.type ? updatedPokemon.type : poke.type;
                res.json({message: `${req.params.species} updated.`, pokemon});
            }
        })
    } else {
        res.status(400).json({message: `${req.params.species} not found.`});
    }
});

// To delete pokemon
router.delete("/:species", (req, res) => {
    const found = pokemon.some(poke => poke.species === req.params.species);
    if (found) {
        res.json({message: `${req.params.species} deleted.`, pokemon: pokemon.filter(poke => poke.species !== req.params.species)});
    } else {
        res.status(400).json({message: `${req.params.species} not found.`});
    }
});

module.exports = router;
