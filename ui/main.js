console.log('Loaded!');
// change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Killer1';

//Move the image
var img = document.getElementById('nadi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
  var interval = setInterval(moveRight,50);
};