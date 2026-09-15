

CREATE TABLE auteurs (
    id_auteur SERIAL PRIMARY KEY,
    nom_auteur VARCHAR(100) NOT NULL,
    nationalite VARCHAR(100) NOT NULL
);


CREATE TABLE adherents(
    id_adherent SERIAL PRIMARY KEY,
    nom_adherent VARCHAR(100) NOT NULL,
    contact VARCHAR(100) NOT NULL
);


CREATE TABLE livres(
    id_livre SERIAL PRIMARY KEY,
    id_auteur INTEGER NOT NULL,
    titre VARCHAR(200) NOT NULL,
    annee_publication INTEGER NOT NULL,
    statut VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_auteur) REFERENCES auteurs(id_auteur),
    CHECK(statut IN ('disponible','emprunté'))

);

CREATE TABLE emprunts(
    id_emprunt SERIAL PRIMARY KEY,
    id_adherent INTEGER NOT NULL,
    id_livre INTEGER NOT NULL,
    date_emprunt DATE NOT NULL,
    date_retour_prevue DATE NOT NULL,
    date_retour_reelle,
    FOREIGN KEY (id_adherent) REFERENCES adherents(id_adherent),
    FOREIGN KEY(id_livre) REFERENCES livres(id_livre)
);