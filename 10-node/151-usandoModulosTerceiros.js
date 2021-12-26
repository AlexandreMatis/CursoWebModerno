const _ = require('lodash') // geralmente quando usa o lodash usa-se underline
setInterval(() => console.log(_.random(1, 6)), 2000)

// intalando o modulo nodemon de forma global
// no terminal: npm i -g nodemon