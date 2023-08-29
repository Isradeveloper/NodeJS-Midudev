const fs = require('node:fs/promises')

// console.log('Leyendo el primer archivo...');
// const text = fs.readFileSync('./archivo.txt', 'utf-8')
// console.log(text);

// console.log('Leyendo el segundo archivo...');
// const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
// console.log(secondText);



console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log(text);
  })

console.log('-> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log(text);
  })

