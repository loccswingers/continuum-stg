function gotoLogin(url){
  window.location.replace(url);
}

function SignIn(type){
  let userI = document.getElementById('user');
  let passI = document.getElementById('pass');

  if(type == 'login'){
    if(userI.value == "Continuum" && passI.value == 'C_Admin'){
      window.location.replace('/home.html');
    }else{
      alert("Invalid username or password.");
    }
  }
  if(type == 'signup'){
    alert("An unexpected error has occured. We're sorry!");
  }
}