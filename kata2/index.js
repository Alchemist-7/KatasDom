//! 1.1 Inserta dinamicamente en un html un div vacio con javascript.
// const mydiv = document.createElement('div')
// document.body.appendChild(mydiv)
//! 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const mydiv = document.createElement('div')
const myP = document.createElement('p')
mydiv.appendChild(myP)
//! 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const container = document.getElementById('container')
for (let i = 0; i <= 6; i++) {
  const newP = document.createElement('p')
  newP.textContent = '' + i
  container.appendChild(newP)
}
//! 1.4 Inserta dinamicamente con javascript en un html una p con el 	texto 'Soy dinámico!'.
const parrafo = document.createElement('p')
parrafo.textContent = 'Soy dinámico'
document.body.appendChild(parrafo)
//! 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.getElementById('h2')
h2.textContent = 'Wubba Lubba dub dub'
h2.appendChild(h2)
//! 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
var list = document.createElement('ul')
apps.forEach(function (app) {
  let elementlist = document.createElement('li')
  elementlist.textContent = app
  list.appendChild(list)
})

//! 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elements = document.querySelectorAll('.fn-remove-me')
elements.forEach(function (element) {
  element.parentNode.removeChild(element)
})
//! 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Voy en medio!'
var divTwo = document.getElementById('divTwo')
divTwo.parentNode.insertBefore(newParagraph, divTwo)
//! 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 	.fn-insert-here
var divs = document.querySelectorAll('.fn-insert-here')
divs.forEach(function (div) {
  var nuevoParrafo = document.createElement('p')
  nuevoParrafo.textContent = 'Voy dentro!'
  div.appendChild(nuevoParrafo)
})
