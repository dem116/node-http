//Crear un archivo llamado server.js (o similar) que utilice el módulo http para crear un servidor HTTP.

const http = require('node:http')

const infoObj = require('./data.js');

const server = http.createServer((req, res) => {
  console.log("Request recieved")
  res.end(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La web</title>
</head>
<body>
    <h1>Este el título en h1: ${infoObj.title} </h1>
    <h2>Este es el subtitulo en h2: ${infoObj.subtitle} </h2>
    <p>Este es un parrafo con la descripción: ${infoObj.description}</p>
    <section> Aquí hay la información de una sección de la web: ${infoObj.section}</section>
</body>
</html>
    `);
})

server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`);
});