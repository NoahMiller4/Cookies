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

function openSettings() {
    settingsModal.style.display = 'inline-block';
    content.style.display = 'none';
}



function setCookie(name, value, options = {}) {
    options = {
      path: '/',
      SameSite: 'Lax',
      ...options
    };
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
