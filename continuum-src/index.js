function RegisterWorker(){
  window.navigator.serviceWorker.register('./sw.js', {scope: __uv$config.prefix})
}

function go(url){
  RegisterWorker()
  window.location.replace(__uv$config.prefix + __uv$config.encodeUrl(url));
}

function Search(){
  let inputT = document.getElementById("urlbar");
  let url = inputT.value.trim();

  if(!isUrl(url)){
    go('https://www.google.com/search?q=' + url);
    elseif(url.startsWith('https://') || url.startsWith('http://'));{
      go(url);
    }
  }
/*  if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
  else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
  RegisterWorker()
  // bring the user to the page
 // window.location.replace(__uv$config.prefix + __uv$config.encodeUrl(url));
  let finalURL = __uv$config.prefix + __uv$config.encodeUrl(url)
  window.location.replace("go.html?title=Chrome&url=" + finalURL) */
}

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
