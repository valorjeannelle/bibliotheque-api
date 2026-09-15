const pool = require("../db.js");

function ObtenirStatistiques() {
    return pool.query(`
        SELECT
            (SELECT COUNT(*) FROM livres) AS total_livres,
            (SELECT COUNT(*) FROM livres WHERE statut = 'disponible') AS livres_disponibles,
            (SELECT COUNT(*) FROM livres WHERE statut = 'emprunte') AS livres_empruntes,
            (SELECT COUNT(*) FROM adherents) AS total_adherents,
            (SELECT COUNT(*) FROM emprunts
             WHERE date_retour_reelle IS NULL
             AND date_retour_prevue < CURRENT_DATE) AS emprunts_en_retard
    `).then((reponse) => {
        return reponse.rows[0];
    });
}

module.exports = {
    ObtenirStatistiques
};