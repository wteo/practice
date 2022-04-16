const express = require("express");
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
    res.json(pokemon);
})

module.exports = router;
