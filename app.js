const box = document.querySelector('.card__box')
const btnSine = document.getElementById('sine')
const btnQuart = document.getElementById('quart')
const btnCubic = document.getElementById('cubic')

loadEvents()

function loadEvents() {
  btnSine.addEventListener('click', sineFunction)
  btnQuart.addEventListener('click', quartFunction)
  btnCubic.addEventListener('click', cubicFunction)
}

function sineFunction() {
  box.classList.add('card__button-easeInOutSine')
  setTimeout(() => {
    removeClasses()
  }, 5000)
}

function quartFunction() {
  box.classList.add('card__button-easeInQuart')
  setTimeout(() => {
    removeClasses()
  }, 5000)
}

function cubicFunction() {
  box.classList.add('card__button-easeInOutCubic')
  setTimeout(() => {
    removeClasses()
  }, 5000)
}

function removeClasses() {
  box.classList.remove('card__button-easeInQuart')
  box.classList.remove('card__button-easeInOutCubic')
  box.classList.remove('card__button-easeInOutSine')
}
