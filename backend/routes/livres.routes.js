const express = require("express");
const routeur = express.Router();

const {ObtenirLivres,
CreationLivre,ModifierLivre,SupprimerLivre,
RechercherLivres,ObtenirLivresAvecPagination} = require("../controllers/livres.controller.js");

routeur.get("/", async (req, res) => {
    const livres = await ObtenirLivres();
    res.send(livres);
});

routeur.post("/", async (req, res) => {
    const titre = req.body.titre;
    const idAuteur = req.body.id_auteur;
    const anneePublication = req.body.annee_publication;
    

    await CreationLivre(titre, idAuteur, anneePublication);

    res.send("Livre ajouté");
});

routeur.get("/recherche", async (req, res) => {
    const titre = req.query.titre;

    const livres = await RechercherLivres(titre);

    res.json(livres);
});

routeur.get("/pagination", async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limite = Number(req.query.limite) || 5;

    const decalage = (page - 1) * limite;

    const livres = await ObtenirLivresAvecPagination(
        limite,
        decalage
    );

    res.json(livres);
});

routeur.put("/:id", async (req, res) => {
    const idLivre = req.params.id;
    const titre = req.body.titre;
    const idAuteur = req.body.id_auteur;
    const anneePublication = req.body.annee_publication;
    const statut = req.body.statut;

    await ModifierLivre(
        idLivre,
        titre,
        idAuteur,
        anneePublication,
        statut
    );

    res.json({
        message: "Modification réussie",
        id_livre: idLivre,
        titre: titre,
        id_auteur: idAuteur,
        annee_publication: anneePublication,
        statut: statut
    });
});

routeur.delete("/:id", async (req, res) => {
    const idLivre = req.params.id;

    await SupprimerLivre(idLivre);

    res.send("Suppression réussie");
});

module.exports = routeur;