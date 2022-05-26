const init = () => {
    const myMap = new ymaps.Map(
        'map',
        {
            center: [55.7718, 37.6316],
            zoom: 16,
            controls: ['smallMapDefaultSet'],
        },
        {},
    );

    const myPlacemark = new ymaps.Placemark(
        [55.7724, 37.6252],
        {},
        {
            iconLayout: 'default#image',
            iconImageHref: 'image/mark.svg',
            iconImageSize: [70, 70],
            iconImageOffset: [-35, -70],
        },
    );
    myMap.geoObjects.add(myPlacemark);
};
ymaps.ready(init);

// LeafletJS
// const map = L.map('map').setView([55.7726, 37.63], 17);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// L.marker([55.7724, 37.6252])
//   .addTo(map)
//   .bindPopup('E-trans')
//   .openPopup();

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