# API de gestion de bibliothèque

## Description

Cette application est une API REST de gestion d'une bibliothèque. Elle permet de gérer les auteurs, les adhérents, les livres et les emprunts.

Le projet a été réalisé dans le cadre d'un projet de formation en développement web full stack.

L'objectif est de mettre en place un backend permettant de gérer les principales opérations d'une bibliothèque à travers une API connectée à une base de données PostgreSQL.

## Fonctionnalités

* Gestion des auteurs

  * Ajouter un auteur
  * Consulter la liste des auteurs
  * Modifier un auteur
  * Supprimer un auteur

* Gestion des adhérents

  * Ajouter un adhérent
  * Consulter la liste des adhérents
  * Modifier un adhérent
  * Supprimer un adhérent

* Gestion des livres

  * Ajouter un livre
  * Consulter la liste des livres
  * Modifier un livre
  * Supprimer un livre
  * Gérer le statut du livre

* Gestion des emprunts

  * Enregistrer un emprunt
  * Consulter les emprunts
  * Enregistrer le retour d'un livre
  * Supprimer un emprunt

## Technologies utilisées

* Node.js
* Express.js
* PostgreSQL
* JavaScript
* SQL
* Postman
* Git et GitHub

## Structure du projet

```text
backend/
├── controllers/
│   ├── auteurs.controller.js
│   ├── livres.controller.js
│   ├── adherents.controller.js
│   └── emprunts.controller.js
│
├── routes/
│   ├── auteurs.routes.js
│   ├── livres.routes.js
│   ├── adherents.routes.js
│   └── emprunts.routes.js
│
├── middlewares/
│
├── .env
├── .gitignore
├── app.js
├── db.js
├── package.json
├── package-lock.json
└── schema.sql
```

## Base de données

La base de données PostgreSQL contient quatre tables principales :

* `auteurs`
* `adherents`
* `livres`
* `emprunts`

Les principales relations sont les suivantes :

```text
AUTEURS 1 ─────── N LIVRES

ADHERENTS 1 ───── N EMPRUNTS

LIVRES 1 ──────── N EMPRUNTS
```

Un auteur peut avoir plusieurs livres.

Un adhérent peut effectuer plusieurs emprunts.

Un livre peut apparaître dans plusieurs emprunts au cours de sa durée de vie.

## Installation

Cloner le projet :

```bash
git clone <URL_DU_REPOSITORY>
```

Accéder au dossier backend :

```bash
cd backend
```

Installer les dépendances :

```bash
npm install
```

## Configuration de la base de données

Créer un fichier `.env` dans le dossier `backend`.

Exemple :

```text
DB_USER=postgres
DB_HOST=localhost
DB_NAME=bibliotheque
DB_PASSWORD=votre_mot_de_passe
DB_PORT=5432
```

Le fichier `.env` contient des informations sensibles et ne doit pas être envoyé sur GitHub.

## Création de la base de données

Créer la base de données `bibliotheque` dans PostgreSQL, puis exécuter le fichier :

```text
schema.sql
```

Ce fichier contient la structure des tables nécessaires au fonctionnement de l'application.

## Lancement du serveur

Démarrer le serveur avec :

```bash
node app.js
```

Le serveur est accessible à l'adresse :

```text
http://localhost:3000
```

## Routes principales

### Auteurs

```text
GET    /api/auteurs
POST   /api/auteurs
PUT    /api/auteurs/:id
DELETE /api/auteurs/:id
```

### Adhérents

```text
GET    /api/adherents
POST   /api/adherents
PUT    /api/adherents/:id
DELETE /api/adherents/:id
```

### Livres

```text
GET    /api/livres
POST   /api/livres
PUT    /api/livres/:id
DELETE /api/livres/:id
```

### Emprunts

```text
GET    /api/emprunts
POST   /api/emprunts
PUT    /api/emprunts/:id/retour
DELETE /api/emprunts/:id
```

## Tests

Les différentes routes de l'API peuvent être testées avec Postman.

Les tests permettent notamment de vérifier :

* la création des ressources ;
* la récupération des données ;
* la modification des ressources ;
* la suppression des ressources ;
* l'enregistrement des emprunts ;
* le retour des livres ;
* la communication entre l'API et PostgreSQL.

## Sécurité

Les informations de connexion à PostgreSQL sont stockées dans des variables d'environnement grâce à `dotenv`.

Le fichier `.env` ainsi que le dossier `node_modules` sont exclus du dépôt Git grâce au fichier `.gitignore`.

## Évolution du projet

Les prochaines améliorations prévues comprennent notamment :

* la validation des données reçues par l'API ;
* la gestion centralisée des erreurs ;
* la détection des emprunts en retard ;
* la mise à jour automatique du statut des livres lors d'un emprunt ou d'un retour ;
* l'ajout d'une route dédiée aux statistiques ;
* la création d'une interface frontend permettant d'utiliser l'API.

## Auteur

Projet réalisé par **OWALA Brichelvie Jeannelle** dans le cadre de sa formation en développement web full stack chez Akieni Academy.
