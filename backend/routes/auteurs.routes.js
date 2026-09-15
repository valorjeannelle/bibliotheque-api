const express=require("express");

const routeur=express.Router();

const {ObtenirAuteurs, CreationAuteur,ModifierAuteur,
    SupprimerAuteur} = require("../controllers/auteurs.controller.js");



routeur.get('/',async (req,res)=>{
    const listeAuteurs=await ObtenirAuteurs();
    res.send(listeAuteurs);

})
routeur.post('/',async (req,res)=>{
    const nationalite= req.body.nationalite;
    const nomAuteur=req.body.nom_auteur;
    const resultat=await CreationAuteur(nomAuteur,nationalite);
    res.send("Auteur ajouté avec succès");
})



routeur.put('/:id',async(req,res)=>{
    const idAuteur=req.params.id;
    const nomAuteur=req.body.nom_auteur;
    const nationalite=req.body.nationalite;
    const resultat=await ModifierAuteur(idAuteur,nomAuteur,nationalite);
    res.json({
        message:"Modification apportée",
        id:idAuteur,
        nom_auteur:nomAuteur,
        nationalite:nationalite
    })
})

routeur.delete('/:id',async (req,res)=>{
    const idAuteur=req.params.id;
    const resultat=await SupprimerAuteur(idAuteur);
    res.send("Suppresion reussie");
})
module.exports=routeur;