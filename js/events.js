//define functions here
function getIt() {
  $('p').on('click', function() {
    frameIt();
    alert("Hey!");
  })
}
function frameIt() {
  $('img').on('load', function() {
    $('img').addclass("tasty")
  })
}
$(document).ready(function(){
getIt();
// call functions here

});
