function Reload(){
  window.location.reload();
  alert("You need to login/signup to enter this page.");
}

function openAB(target_url) {
  //let win = window.open();
  let win = window.open("about:blank", "", "width=1200, height=600");
  let url = target_url;
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  win.document.title = 'Loading...';
  
  let iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url;
  
  win.document.body.appendChild(iframe);
}

function SignIn(type){
  let userI = document.getElementById('user');
  let passI = document.getElementById('pass');

  if(type == 'login'){
    if(userI.value == "Continuum" && passI.value == 'C_Admin'){
      openAB('/continuum-src/home.html');
      window.close('','_parent','');
    }else{
      alert("Invalid username or password.");
    }
  }
  if(type == 'signup'){
    alert("An unexpected error has occured. We're sorry!");
  }
}