const express = require('express');
const cors = require('cors');
const clientRoutes = require('./Routes/ClientRoutes');
const categorieRoutes = require('./Routes/CategorieRoutes');
const destinationRoutes = require('./Routes/DestinationRoutes');
const paiementRoutes = require('./Routes/PaiementRoutes');
const reservationRoutes = require('./Routes/ReservationRoutes');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// 5 types de requetes possibles => GET, POST, PUT, DELETE, PATCH

//Premier parametre est la route pour acceder aux données
//Deuxieme parametre est la fonction fléché qui va faire le traitement, prend toujours deux parametres (request, result)
app.get('/hello', (request, result) => {
    //Envoie les données à l'utilisateur
  result.send('Hello World!');
});


app.use('/clients', clientRoutes);
app.use('/categories', categorieRoutes);
app.use('/destinations', destinationRoutes);
app.use('/paiements', paiementRoutes);
app.use('/reservations', reservationRoutes);

//Premier parametre est le port sur lequel le serveur va écouter
//Deuxieme parametre est la fonction fléché qui est faite uniquement au lancement du serveur
app.listen(port, () => {
  console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});

//les étapes : faire le model, ensuite service, ensuite controller, ensuite route et ajouter les lignes dans index.js