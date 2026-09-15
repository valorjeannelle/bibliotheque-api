const express=require("express");

const app=express();
app.use(express.json());

const logger=require("./middlewares/logger.middleware.js");

app.use(logger);

const auteursRouteur=require("./routes/auteurs.routes.js");
const livresRouteur=require("./routes/livres.routes.js");

const adherentsRouteur=require("./routes/adherents.routes.js");
const empruntsRouteur=require("./routes/emprunts.routes.js");

const statistiquesRouteur = require("./routes/statistiques.routes.js");

const errorHandler = require("./middlewares/error.middleware.js");

app.use("/api/auteurs",auteursRouteur);

app.use("/api/livres",livresRouteur);

app.use("/api/adherents",adherentsRouteur);

app.use("/api/emprunts",empruntsRouteur);

app.use("/api/statistiques", statistiquesRouteur);

app.use(errorHandler);

app.listen(3000,()=>{
    console.log("Serveur demaré dans le port 3000")
});