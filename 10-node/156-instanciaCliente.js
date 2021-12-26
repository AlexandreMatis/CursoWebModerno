const contadorA = require('./156-instanciaUnica')
const contadorB = require('./156-instanciaUnica')

const contadorC = require('./156-instanciaNova')()
const contadorD = require('./156-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)