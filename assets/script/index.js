/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Cookies assignment

    Noah Miller

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict'

const modal = document.querySelector('.modal');
const content = document.querySelector('.content');
const accept = document.querySelector('.accept');
const settings = document.querySelector('.settings')
const settingsModal = document.querySelector('.settingsModal');
const browser = document.querySelector('.browser');
const os = document.querySelector('.os');
const sw = document.querySelector('.sw');
const sh = document.querySelector('.sh');
const save = document.querySelector('.save')
const checkbox = document.querySelectorAll('input[type=checkbox]');
const text = document.querySelector('.text')

let getBrowser = (function (agent) { switch (true) {
    case agent.indexOf("edge") > -1: return "MS Edge";
    case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
    case agent.indexOf("trident") > -1: return "MS IE";
    case agent.indexOf("firefox") > -1: return "Firefox";
    case agent.indexOf("safari") > -1: return "Safari";
    default: return "other";
}
})(window.navigator.userAgent.toLowerCase());

function getOS ()
{
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux"
    }
    
    return `System: ${finalOs}`
}

function openSettings() {
    settingsModal.style.display = 'inline-block';
    content.style.display = 'none';
}

function setCookie(name, value, options = {}) {
    const date = new Date();
    date.setSeconds(date.getSeconds() + 15);
    let expires = "expires=" + date.toUTCString();
    options = {
      path: '/',
      SameSite: 'Lax',
      ...options
    };
};

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}


// When the user clicks anywhere outside of the modal, function will close modal
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      text.style.filter = 'none'
    }
}

accept.addEventListener("click", function () {
    console.log("Browser: "+ getBrowser); 
    console.log(getOS());
    console.log(`Screen Width: ${screen.width}`);
    console.log(`Screen Height: ${screen.height}`);
    modal.style.display = "none";
    text.style.filter = 'none'
})

save.addEventListener('click', function() {
    if (browser.checked) {
        console.log("Browser: "+ getBrowser); 
    }  
    if (os.checked) {
        console.log(getOS()); 
    }  
    if (sh.checked) {
        console.log("Screen Width: "+ screen.width); 
    }  
    if (sw.checked) {
        console.log("Screen Height: "+ screen.height); 
    }  
    modal.style.display = 'none';
    text.style.filter = 'none'
});
