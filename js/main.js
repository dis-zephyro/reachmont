// Показ - скрытие описаний продукта

$('.features__hide').click(function() {
    $('.tabs').hide();
    $('.features__hide').hide();
    $('.features__show').show();
});

$('.features__show').click(function() {
    $('.tabs').show();
    $('.features__show').hide();
    $('.features__hide').show();
});

// Аккордеон

$(function()
{
    $('.quest-box-inner').jScrollPane();
});


$(".quest-box").accordion({
    header:'.quest',
    collapsible: true
});


// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [53.9061,27.5549],
            zoom: 6,
            controls: []
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([53.8409,27.3945], {
            balloonContent: '<div class="map-info"><div class="map-place-title">Склад в Республике Беларусь «Винктех-Трейд»</div> <table class="map-place-contact"><tr><td class="item1"><strong>Адрес:</strong></td> <td class="item2">Озерцо, ул. Центральная 1в, Минский р-н, 223021</td> </tr> <tr> <td class="item1"><strong>Тел.:</strong></td> <td class="item2">+375 (17) 507-69-99</td> </tr> <tr> <td class="item1"><strong>Сайт:</strong></td> <td class="item2"> <a href="http://www.winktech.by">http://www.winktech.by</a></td> </tr> <tr><td class="item1"><strong>Координаты:</strong></td><td class="item2">53.840496, 27.390992</td></tr></table></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark1.png',
            iconImageSize: [27, 25],
            iconImageOffset: [-13, -26]
        }))
        .add(new ymaps.Placemark([53.6628,23.9671], {
            balloonContent: '<div class="map-info"><div class="map-place-title">ООО «Винктех-Запад»</div> <table class="map-place-contact"><tr><td class="item1"><strong>Адрес:</strong></td> <td class="item2">Скидельское шоссе 22, Гродно, 230015</td> </tr> <tr> <td class="item1"><strong>Тел.:</strong></td> <td class="item2">+375 (152) 99 13 71</td> </tr> <tr> <td class="item1"><strong>Сайт:</strong></td> <td class="item2"> <a href="http://www.winktech.by">http://www.winktech.by</a></td> </tr> <tr><td class="item1"><strong>Координаты:</strong></td><td class="item2">52.121408, 23.657261</td></tr></table></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark1.png',
            iconImageSize: [27, 25],
            iconImageOffset: [-13, -26]
        }))
        .add(new ymaps.Placemark([53.9547,30.3334], {
            balloonContent: '<div class="map-info"><div class="map-place-title">ООО «Винктех-Восток»</div> <table class="map-place-contact"><tr><td class="item1"><strong>Адрес:</strong></td> <td class="item2">Криулина 27, Могилев, 212008</td> </tr> <tr> <td class="item1"><strong>Тел.:</strong></td> <td class="item2">+375 (222) 72 33 72</td> </tr> <tr> <td class="item1"><strong>Сайт:</strong></td> <td class="item2"> <a href="http://www.winktech.by">http://www.winktech.by</a></td> </tr> <tr><td class="item1"><strong>Координаты:</strong></td><td class="item2">53.9, 30.333338</td></tr></table></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark1.png',
            iconImageSize: [27, 25],
            iconImageOffset: [-13, -26]
        }))
        .add(new ymaps.Placemark([55.1955,30.2630], {
            balloonContent: '<div class="map-info"><div class="map-place-title">ООО «Винктех-Север»</div> <table class="map-place-contact"><tr><td class="item1"><strong>Адрес:</strong></td> <td class="item2">Криулина 27, Могилев, 212008</td> </tr> <tr> <td class="item1"><strong>Тел.:</strong></td> <td class="item2">+375 (212) 55 02 91<br/>+375 (29) 212 96 48<br/>+375 (29) 596 77 42</td> </tr> <tr> <td class="item1"><strong>Сайт:</strong></td> <td class="item2"> <a href="http://www.winktech.by">http://www.winktech.by</a></td> </tr> <tr><td class="item1"><strong>Координаты:</strong></td><td class="item2">55.195383, 30.251921</td></tr></table></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark1.png',
            iconImageSize: [27, 25],
            iconImageOffset: [-13, -26]
        }))
        .add(new ymaps.Placemark([52.4331,30.9326], {
            balloonContent: '<div class="map-info"><div class="map-place-title">ООО «Винктех-Юг»</div> <table class="map-place-contact"><tr><td class="item1"><strong>Адрес:</strong></td> <td class="item2">п-д. Индустриальный 7, Гомель, 246027</td> </tr> <tr> <td class="item1"><strong>Тел.:</strong></td> <td class="item2">+375 (232) 46 11 94<br/>+375 (232) 46 14 40</td> </tr> <tr> <td class="item1"><strong>Сайт:</strong></td> <td class="item2"> <a href="http://www.winktech.by">http://www.winktech.by</a></td> </tr> <tr><td class="item1"><strong>Координаты:</strong></td><td class="item2">52.429067, 30.920495</td></tr></table></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark1.png',
            iconImageSize: [27, 25],
            iconImageOffset: [-13, -26]
        }));

}