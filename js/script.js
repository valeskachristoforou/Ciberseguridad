$(document).ready(function () {
  // Ocultar/mostrar lista de consejos
  $('.list-group').before('<button class="btn btn-outline-secondary mb-3" id="toggleList">Mostrar/Ocultar consejos</button>');

  $('#toggleList').click(function () {
    $('.list-group').slideToggle();
  });
});
