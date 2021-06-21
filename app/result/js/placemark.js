jQuery(document).ready(function( $ ) {

    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            center: [55.670986, 37.733554],        
            zoom: 17,
            controls: ['default', 'routeButtonControl']
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Метка',
                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),

        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([55.8, 37.6], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '1',
            balloonContent: 'Балун',
            hintContent: 'Стандартный значок метки'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        }),





        myPlacemark2 = new ymaps.Placemark([55.670986, 37.733554], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn"></div>'            
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo-map.svg',
            // Размеры метки.
            iconImageSize: [50, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });

        myPlacemark3 = new ymaps.Placemark([52.718857, 41.449453], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn">Детский сад</div>'            
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo-map.svg',
            // Размеры метки.
            iconImageSize: [50, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });






    // Добавляем все метки на карту.
    myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3)    
    .add(myGeoObject);

// Добавим на карту ползунок масштаба и линейку.
//myMap.controls.add('zoomControl');


}

}); //ready