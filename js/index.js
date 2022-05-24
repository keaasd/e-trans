let tabButton = document.querySelector('.category__button');
let gridItem = document.querySelectorAll('.catalog-grid__item');

// tabButton.onclick = () => {
//   for (let i = 0; i < gridItem.length; i++) {
//     if (i < 8) {
//       gridItem[i].classList.add('catalog-grid_active')
//     }
    
//   }

// }
{
var hasWebRTC = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
const body = document.body;
if (hasWebRTC) {
//   alert('This browser is fully or partially WebRTC-capable');
  console.log('поддерживает WebRTC');
} else {
    console.log('Этот браузер НЕ поддерживает WebRTC');
}
var sBrowser, sUsrAg = navigator.userAgent;
if (sUsrAg.indexOf("Firefox") > -1) {
     sBrowser = "Mozilla Firefox";
     body.classList.add('firefox');
} else if (sUsrAg.indexOf("Opera") > -1) {
     sBrowser = "Opera";
     body.classList.add('Opera');
} else if (sUsrAg.indexOf("Trident") > -1) {
     sBrowser = "Microsoft Internet Explorer";
     body.classList.add('ie');
} else if (sUsrAg.indexOf("Edge") > -1) {
     sBrowser = "Microsoft Edge";    
     body.classList.add('Edge');   
} else if (sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome or Chromium";
    body.classList.add('Chrome');    
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
    body.classList.add('Safari'); 
} else {
    sBrowser = "unknown";
}
}