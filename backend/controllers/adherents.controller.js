const pool=require("../db.js");

function ObtenirAdherents(){
    return pool.query("SELECT * FROM adherents").then((reponse)=>{
        const listeAdherents=reponse.rows;
        return listeAdherents;
    })
    .catch((err)=>{
        console.log(err,"Erreur de connexion");
    })
}


function CreationAdherent(nom_adherent,contact){
    return pool.query(`INSERT INTO adherents (nom_adherent,contact) VALUES ($1,$2)`,
        [nom_adherent,contact]
    )
}


function ModifierAdherent(id_adherent,nom_adherent,contact){
    return pool.query(`UPDATE adherents SET nom_adherent=$2,contact=$3 WHERE id_adherent=$1;`,
        [id_adherent,nom_adherent,contact]
    )
}

function SupprimerAdherent(id_adherent){
    return pool.query(`DELETE FROM adherents WHERE id_adherent=$1`,
        [id_adherent]
    )
}
module.exports={ObtenirAdherents,CreationAdherent,ModifierAdherent,SupprimerAdherent};