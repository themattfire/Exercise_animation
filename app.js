const box = document.querySelector('.card__box')
const btnElastic = document.getElementById(elastic)
const btnQuart = document.getElementById(Quart)
const btnCubic = document.getElementById(Cubic)

btnElastic.addEventListener('click', elasticFunction())
btnQuart.addEventListener('click', quartFunction())
btnCubic.addEventListener('click', cubicFunction())

function elasticFunction() {
  box.classList.add('card__button-easeInOutElastic')
}

function quartFunction() {
  box.classList.add('card__button-easeInQuart')
}

function cubicFunction() {
  box.classList.add('card__button-easeInOutCubic')
}
