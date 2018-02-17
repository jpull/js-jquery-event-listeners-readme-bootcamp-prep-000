function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71) {
    alert('You pressed G');
}
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});
