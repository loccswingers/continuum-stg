function Search(){
  let inputT = document.getElementById("urlbar");
  window.navigator.serviceWorker.register('./sw.js', {scope: __uv$config.prefix})
  // does it have a link or a search?
  let url = inputT.value.trim();
  if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
  else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
  // bring the user to the page
 // window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  window.location.replace(__uv$config.prefix + __uv$config.encodeUrl(url));
}

function go(url){
  window.navigator.serviceWorker.register('./sw.js', {scope: __uv$config.prefix})
  window.location.replace(__uv$config.prefix + __uv$config.encodeUrl(url));
}

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
