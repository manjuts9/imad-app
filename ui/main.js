console.log('Loaded!');
// change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Killer1';

//Move the image
var img = document.getElementById('nadi');
img.onclick = function(){
  img.style.marginLeft = '100px';  
};