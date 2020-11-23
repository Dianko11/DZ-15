$(document).ready(function () { // Сюда помещаем все наши скрипты
 $('.menu-opener').on('click', function(e) {
    e.preventDefault() // отменаят стандартное повередие элемента к примеру a,button
  $('.head-header').toggleClass('nav-active');
 })
});