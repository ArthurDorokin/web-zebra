$(document).ready(function() {

// time


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        // daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) +  00 + 40 * 60 * 1000); // for endless timer
initializeClock('clockdiv', deadline);
var deadline="January 01 2018 00:00:00 GMT+0300";
var deadline = new Date(Date.parse(new Date()) +  00 + 40 * 60 * 1000);


// time





// zoom photo

    $(".photo-lg").click(function(){	// Событие клика на маленькое изображение
        var img = $(this);	// Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
            "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup_bg").click(function(){	// Событие клика на затемненный фон
            $(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
            setTimeout(function() {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 800);
        });
    });

// zoom photo
function choseChange() {
    var init = 0;
    function autoChange() {
        setTimeout(function(){
            window.requestAnimationFrame(autoChange)
        },1000);
        init++
        init > $('.item-why').length - 1 ? init = 0 : '';

        $('.item-why').removeClass('active');
        $('.item-why').eq(init).addClass('active');

        $('.circle img').removeClass('active');
        $('.circle img').eq(init).addClass('active');

    }; autoChange();

};choseChange();

});