const pool = require("../db.js");


function ObtenirLivres() {
    return pool.query("SELECT * FROM livres")
        .then((reponse) => {
            return reponse.rows;
        });
}

function CreationLivre(titre, id_auteur, annee_publication) {
    return pool.query(
        `INSERT INTO livres
        (titre, id_auteur, annee_publication, statut)
        VALUES ($1, $2, $3, 'disponible')`,
        [titre, id_auteur, annee_publication]
    );
}

function ModifierLivre(id_livre, titre, id_auteur, annee_publication, statut) {
    return pool.query(
        `UPDATE livres
        SET titre = $2,
            id_auteur = $3,
            annee_publication = $4,
            statut = $5
        WHERE id_livre = $1`,
        [id_livre, titre, id_auteur, annee_publication, statut]
    );
}

function SupprimerLivre(id_livre) {
    return pool.query(
        `DELETE FROM livres
        WHERE id_livre = $1`,
        [id_livre]
    );
}

function RechercherLivres(titre) {
    return pool.query(
        `SELECT * FROM livres
         WHERE titre ILIKE $1`,
        [`%${titre}%`]
    ).then((reponse) => {
        return reponse.rows;
    });
}

function ObtenirLivresAvecPagination(limite, decalage) {
    return pool.query(
        `SELECT * FROM livres
         ORDER BY id_livre
         LIMIT $1
         OFFSET $2`,
        [limite, decalage]
    ).then((reponse) => {
        return reponse.rows;
    });
}

module.exports = {
    ObtenirLivres,
    CreationLivre,
    ModifierLivre,
    SupprimerLivre,
    RechercherLivres,
    ObtenirLivresAvecPagination,
    RechercherLivres
};