const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

 crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log('Datos exportados en el archivo:'.green, colors.blue(nombreArchivo)))
    .catch( err => console.log(err)); 

