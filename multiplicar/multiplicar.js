
const fs = require('fs');


// PROMESA
// modulo.exports.crearArcfivos =(base) => {

let listar = (base, limite=10) => {
    for (let i = 1; i <= limite; i++) {
         console.log(` ${base}* ${i} = ${base * i}`); 
    }
 
    
}


crearArchivos = (base, limite = 10) => {
    
    let data = '';
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`"${base}" no es un Número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data +=`${base} * ${i} = ${base*i}\n`;      
            
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);     
        }); 

   });
}

 module.exports = {
     crearArchivos,
     listar 
}

