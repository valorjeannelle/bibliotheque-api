const pool=require("../db.js");

function ObtenirAuteurs(){
   return pool.query("SELECT * FROM auteurs").then((reponse=>{
        const tableAuteurs=reponse.rows;
        return tableAuteurs;
       
    }))
    .catch((err)=>{
        console.log(err,"Connexion echouée");
    });
}

function CreationAuteur(nom_auteur,nationalite){
    return pool.query(`INSERT INTO auteurs (nom_auteur,nationalite) VALUES ($1,$2)`,
        [nom_auteur,nationalite]
    );
}

function ModifierAuteur(id_auteur,nom_auteur,nationalite){
    return pool.query(`UPDATE auteurs SET nom_auteur=$2,
        nationalite=$3
        WHERE id_auteur=$1 ;`,
        [id_auteur,nom_auteur,nationalite])

}


function SupprimerAuteur(id_auteur){
    return pool.query(`DELETE FROM auteurs WHERE id_auteur=$1;`,[id_auteur]);
    
}
module.exports={CreationAuteur,
ObtenirAuteurs,ModifierAuteur,SupprimerAuteur}
