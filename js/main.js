const titleElement = document.querySelector('#title')

const blueButton = document.querySelector('#title-change')
const redButton = document.querySelector('#remove')
const content = document.querySelector('#content')

blueButton.addEventListener('click', () => {
  // titleElement.classList.add('show')
  // titleElement.classList.add('text-danger')
  // const response = ...
  const newText = document.createTextNode('Live data')
  content.appendChild(newText)

})

redButton.addEventListener('click', () => {
  titleElement.classList.remove('text-danger')
})

setTimeout(() => {
  titleElement.classList.add('text-danger')
}, 2000)