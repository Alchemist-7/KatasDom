const documentToRemove = document.querySelector('fn-remove-me')
if (documentToRemove) {
  documentToRemove.remove()
} else {
  console.log('No se encontró ningún elemento con la clase fn-remove-me')
}
