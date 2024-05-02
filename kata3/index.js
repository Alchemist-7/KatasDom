//! 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
// const list = document.createElement('ul')
// countries.forEach(function (country) {
//   let elementlist = document.createElement('li')
//   elementlist.textContent = country
//   list.appendChild(list)
// })
//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const element = document.querySelector('.fn-remove-me')
element.remove(element)
//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ul = document.createElement('ul')
cars.forEach(function (car) {
  const li = document.createElement('li')
  li.textContent = car
  ul.appendChild(li)
})
var printherediv = document.querySelector('[data-function="printhere"]')
printherediv.appendChild(ul)
//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const container = document.body
countries.forEach((country) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = country.title
  const img = document.createElement('img')
  img.src = country.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  container.appendChild(div)
})

//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
//  const contenedor = document.getElementById('contenedor');

//  function remove() {
//      const divs = contenedor.getElementsByTagName('div');
//      const ultimoDiv = divs[divs.length - 1];
//      if (ultimoDiv) {
//          contenedor.removeChild(ultimoDiv);
//      } else {
//          alert('No hay elementos para eliminar');
//      }
//  }

//  const btnEliminar = document.getElementById('eliminar');
//  btnEliminar.addEventListener('click', eliminarUltimoDiv);
//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const contenedor = document.getElementById('contenedor')
function eliminarDiv() {
  contenedor.removeChild(this.parentElement)
}
countries.forEach((country) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = country.title
  const img = document.createElement('img')
  img.src = country.imgUrl
  const btnEliminar = document.createElement('button')
  btnEliminar.textContent = 'Eliminar'
  btnEliminar.addEventListener('click', eliminarDiv)
  div.appendChild(h4)
  div.appendChild(img)
  div.appendChild(btnEliminar)
  contenedor.appendChild(div)
})
