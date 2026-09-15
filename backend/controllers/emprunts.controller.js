const pool = require("../db.js");

function ObtenirEmprunts() {
    return pool.query("SELECT * FROM emprunts")
        .then((reponse) => {
            return reponse.rows;
        });
}

async function CreationEmprunt(
    id_adherent,
    id_livre,
    date_emprunt,
    date_retour_prevue
) {
    const adherent = await pool.query(
    `SELECT * FROM adherents WHERE id_adherent = $1`,
    [id_adherent]
);
if (adherent.rows.length === 0) {
    throw new Error("Adhérent introuvable");
}
   const resultat=await  pool.query(`Select * FROM livres WHERE id_livre=$1 `,[id_livre])
   if (resultat.rows.length === 0) {
    throw new Error("Livre introuvable");
}
if (resultat.rows[0].statut !== "disponible") {
    throw new Error("Livre déjà emprunté");
}
   const emprunt = await pool.query(
    `INSERT INTO emprunts
    (id_adherent, id_livre, date_emprunt, date_retour_prevue)
    VALUES ($1, $2, $3, $4)`,
    [id_adherent, id_livre, date_emprunt, date_retour_prevue]
);
await pool.query(
    `UPDATE livres
     SET statut = 'emprunté'
     WHERE id_livre = $1`,
    [id_livre]
);
return emprunt;
}



function SupprimerEmprunt(id_emprunt) {
    return pool.query(
        `DELETE FROM emprunts
        WHERE id_emprunt = $1`,
        [id_emprunt]
    );
}
async function RetourLivre(id_emprunt, date_retour_reelle) {
    const resultat = await pool.query(
        `SELECT * FROM emprunts WHERE id_emprunt = $1`,
        [id_emprunt]
    );
    if (resultat.rows.length === 0) {
    throw new Error("Emprunt introuvable");
}
const idLivre = resultat.rows[0].id_livre;
await pool.query(
    `UPDATE emprunts
     SET date_retour_reelle = $2
     WHERE id_emprunt = $1`,
    [id_emprunt, date_retour_reelle]
);
await pool.query(
    `UPDATE livres
     SET statut = 'disponible'
     WHERE id_livre = $1`,
    [idLivre]
);
return resultat;
}

function ObtenirEmpruntsEnRetard() {
    return pool.query(
        `SELECT * FROM emprunts
         WHERE date_retour_reelle IS NULL
         AND date_retour_prevue < CURRENT_DATE`
    ).then((reponse) => {
        return reponse.rows;
    });
}

module.exports = {
    ObtenirEmprunts,
    CreationEmprunt,
    RetourLivre,
    SupprimerEmprunt,
    ObtenirEmpruntsEnRetard
};