
//submit password/username to login
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make request to the server and send  name
  var request = new XMLHttpRequest();
  
  
  //caputre the response and store it in variable
  request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status===200){
         console.log('user logged in');
         alert('logged in succesfully');    
        }else if(request.status===403){
          alert('username/password is incorrect');
        }else if(request.status === 500){
            alert('soomething went wrong with the server');
        }
    }  
    //not done yet
  };
  //make request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST', 'http://manjuts90.imad.hasura-app.io/login', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({username:username, password:password}));
  
};
