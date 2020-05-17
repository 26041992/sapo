
// #botao-pula

// Adicionando o evento de clique ao botão '#botao-pular'
var distancialeft = 300;
$('#botao-pular').click(function(){

  //Alterando o css para query
    $('#sapo').css(
        'margin-left',
        distancialeft);
  
  $('#sapo').css(
      'margin-top', '350px');
  $('#sapo').css(
      'border-style', 'double');
      $('#sapo').css(
      'border-width', '5px');
      $('#sapo').css(
      'border-color', 'darkred');

  distancialeft = distancialeft + 50;

});