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
  box.classList.remove('card__button-easeInQuart')
  box.classList.remove('card__button-easeInOutCubic')
  box.classList.add('card__button-easeInOutElastic')
}

function quartFunction() {
  box.classList.add('card__button-easeInQuart')
}

function cubicFunction() {
  box.classList.add('card__button-easeInOutCubic')
}
