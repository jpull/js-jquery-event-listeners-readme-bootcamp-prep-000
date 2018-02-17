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
    if(key.which == 83){
    alert('s was pressed');
}
alert ('${key} was pressed');
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
