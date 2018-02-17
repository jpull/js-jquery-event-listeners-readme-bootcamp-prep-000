//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}
function frameIt() {
  $('img').on('load', function() {
    $('img').addclass("tasty");
  })
}
$(document).ready(function(){
getIt();
frameIt();
// call functions here

});
