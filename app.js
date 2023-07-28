const express = require('express');
const app = express ();
const PORT = 3000;
const path = require('path');

/* configuraciones */

app.use(express.static(path.join(__dirname, 'public')));

/* rutas */

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));


app.listen(PORT, console.log("Servidor corriendo en http://localhost:" + PORT));