const http = require('http');

http.createServer( (req, res) => {
    // res.write('Hola Mundo');

    res.writeHead(200, {'Contnet-Type': 'aplicattion/json'});

    let salida = {
        nombre: 'Luis',
        apellido: 'Galicia',
        telefono: 929647791,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
    
})
.listen(8080);

console.log('Escuchando el puerto 8080');