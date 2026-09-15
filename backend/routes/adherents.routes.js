const express=require("express");

const routeur=express.Router();

const {ObtenirAdherents,CreationAdherent,ModifierAdherent,SupprimerAdherent} = require("../controllers/adherents.controller.js");

routeur.get("/",async(req,res)=>{
    const ListeAdherents= await ObtenirAdherents();
    res.send(ListeAdherents);
});

routeur.post('/',async (req,res)=>{
    const nomAdherent=req.body.nom_adherent;
    const contact=req.body.contact;
    const resultat=await CreationAdherent(nomAdherent,contact);
    res.send("Adherent ajouté");
})

routeur.put('/:id',async (req,res)=>{
    const nomAdherent=req.body.nom_adherent;
    const contact=req.body.contact;
    const idAdherent=req.params.id;
    const resultat=await ModifierAdherent(idAdherent,nomAdherent,contact);

    res.send({
        message:"Modification reussie",
        id_adherent:idAdherent,
        nom_adherent:nomAdherent,
        contact:contact
    });


})

routeur.delete("/:id",async (req,res)=>{
    const idAdherent=req.params.id;
    const resultat=await SupprimerAdherent(idAdherent);
    res.send("Suppresion reussie");
})

module.exports=routeur;