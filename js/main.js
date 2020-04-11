var modal = document.querySelector('.modal'),
  closeBtn = document.querySelector('.closeBtn')

closeBtn.addEventListener('click', function () {
  hideModal()
})

window.addEventListener('click', function (e) {
  if (e.target == modal) {
    hideModal()
  }
})

showModal = () => {
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

hideModal = () => {
  modal.style.display = 'none'
  document.body.style.overflow = 'auto'
}

const elements = document.getElementsByClassName('jsOpenModal')
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    showModal()
    const imgElements = modal.getElementsByTagName('img')
    const img = imgElements[0]
    const workName = elements[i].getAttribute('data-work')
    img.src = `img/works/${workName}.png`
    console.log(img.src)
  })
}
