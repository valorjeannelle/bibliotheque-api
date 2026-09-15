const express = require("express");
const routeur = express.Router();

const {
    ObtenirEmprunts,
    CreationEmprunt,
    RetourLivre,
    SupprimerEmprunt,
    ObtenirEmpruntsEnRetard
} = require("../controllers/emprunts.controller.js");

routeur.get("/", async (req, res) => {
    const emprunts = await ObtenirEmprunts();
    res.send(emprunts);
});

routeur.post("/", async (req, res) => {
    const idAdherent = req.body.id_adherent;
    const idLivre = req.body.id_livre;
    const dateEmprunt = req.body.date_emprunt;
    const dateRetourPrevue = req.body.date_retour_prevue;

    await CreationEmprunt(
        idAdherent,
        idLivre,
        dateEmprunt,
        dateRetourPrevue
    );

    res.send("Emprunt enregistré");
});

routeur.get("/retards", async (req, res) => {
    const emprunts = await ObtenirEmpruntsEnRetard();

    res.json(emprunts);
});

routeur.put("/:id/retour", async (req, res) => {
    const idEmprunt = req.params.id;
    const dateRetourReelle = req.body.date_retour_reelle;

    await RetourLivre(idEmprunt, dateRetourReelle);

    res.json({
        message: "Livre retourné",
        id_emprunt: idEmprunt,
        date_retour_reelle: dateRetourReelle
    });
});

routeur.delete("/:id", async (req, res) => {
    const idEmprunt = req.params.id;

    await SupprimerEmprunt(idEmprunt);

    res.send("Emprunt supprimé");
});

module.exports = routeur;