const {Pool}=require("pg");

require("dotenv").config();

const pool=new Pool({

    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT

});

pool.query("SELECT NOW()").then((reponse)=>{
    console.log(reponse.rows);
})
.catch((err)=>{
    console.log(err,"Nous n'avons pas pu se connecter a la base de données");
});

module.exports=pool;