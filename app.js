// const fs = require('fs');
 // let base = 2;
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data +=`${base} * ${i} = ${i*base}\n`;      
    
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`exito, el archivo tabla-${base}.txt fue creado`);
    
// }); 

const argv = require('./config/yargs').argv;

//destructuracion 
const {crearArchivos, listar} = require('./multiplicar/multiplicar');
//let base = 'hd';

let comando = argv._[0];
switch (comando) {
  case 'listar':
    listar(argv.base, argv.limite);
    break;
  case 'crear':
      crearArchivos (argv.base, argv.limite)
      .then(archivos => console.log(`archivo creado: ${archivos}`))
      .catch(e => console.log(e));
    break;
    

  default:
 
}




// let parametros = argv[2];
// let base = parametros.split('=')[1]
// console.log(base);



  // nodemon app.js --base=4