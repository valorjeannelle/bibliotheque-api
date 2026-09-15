const express = require("express");
const routeur = express.Router();

const { ObtenirStatistiques } = require("../controllers/statistiques.controller.js");

routeur.get("/", async (req, res) => {
    const statistiques = await ObtenirStatistiques();

    res.json(statistiques);
});

module.exports = routeur;