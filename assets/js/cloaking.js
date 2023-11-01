var title = localStorage.getItem("title")
var favicon = localStorage.getItem("favicon")

const faviconLink = document.querySelector("#favicon");

if (localStorage.hasOwnProperty("title")) {
    document.title = title
}
if (localStorage.hasOwnProperty("favicon")) {
    document.querySelector("link[rel~='icon']").href = favicon;
}

function settitle(title) {
  if (title !== "") {
  localStorage.setItem("title", title)
  document.title = title
  
  } else {
  localStorage.removeItem("title")
  document.title = "New Tab"
  }
}
function setfavicon(icon) {
  if (icon !== "") {
  localStorage.setItem("favicon", icon)
  document.querySelector("link[rel='shortcut icon']").href = icon;
  } else {
  localStorage.removeItem("favicon")
  document.querySelector("link[rel='shortcut icon']").href = "/assets/js/favicons/new-tab.ICO";
  }
}

function setGoogle() {
  settitle("Google")
  setfavicon("/assets/js/favicons/google.ICO")
}

function setDrive() {
  settitle("My Drive - Google Drive")
  setfavicon("/assets/js/favicons/drive.ICO")
}

function setClever() {
  settitle("Clever | Portal")
  setfavicon("/assets/js/favicons/clever.ICO")
}

function setReset() {
 settitle("CONTINUUM")
 setfavicon("/assets/js/favicons/default.ICO")
}