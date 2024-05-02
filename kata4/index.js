//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
function handleClick(event) {
  console.log('Información del evento de clic:')
  console.log('Tipo de evento:', event.type)
  console.log('Objeto que disparó el evento:', event.target)
  console.log('Coordenadas del clic (X, Y):', event.clientX, ',', event.clientY)
  console.log('Botón del ratón:', event.button)
  console.log(
    'Tecla modificadora presionada:',
    event.ctrlKey ? 'Ctrl' : '',
    event.shiftKey ? 'Shift' : '',
    event.altKey ? 'Alt' : '',
    event.metaKey ? 'Meta' : ''
  )
}
const btnToClick = document.getElementById('btnToClick')
btnToClick.addEventListener('click', handleClick)
//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
// function handleFocus(event) {
//   const inputValue = event.target.value;
//   console.log('Valor del input:', inputValue);
// }
// const myInput = document.getElementById('myInput');
// myInput.addEventListener('focus', handleFocus);
//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
function handleInput(event) {
  const inputValue = event.target.value
  console.log('Valor del input:', inputValue)
}
const myInput = document.getElementById('myInput')
myInput.addEventListener('input', handleInput)
