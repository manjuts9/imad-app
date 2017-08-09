//counter code
var button =document.getElementById('counter');

button.onclick = function(){
  //create request object
  var request = new XMLHttpRequest();
  
  
  //caputre the response and store it in variable
  request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status===200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
    //not done yet
  };
  //make request
  request.open('GET', 'http://manjuts90.imad.hasura-app.io/counter', true);
  request.send(null);
};