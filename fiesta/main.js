var nombre = 'Ana'
console.log('hola ' + nombre + ' 🐹')
console.log(typeof nombre)

var edades = [20, 22]

var yo = {
  nombre: nombre,
  apellido: 'Sosa'
}

function saludar(nombre) {
  return "Hola " + nombre
}

var saludo = saludar(yo.nombre)
console.log(saludo)


var a = 10
var b = a
a = 20
console.log(b)


document.querySelector("#estamosMelos").style.color = 'red'