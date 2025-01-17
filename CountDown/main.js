// comecei fazer tudo em ingles.
'use strict';

const formatingDigit = (digit) => `0${digit}`.slice(-2);

const update = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const qtdSeconds = time % 60;
    const qtdMinutes = Math.floor((time % (60 * 60)) / 60);
    const qtdHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const qtdDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatingDigit(qtdSeconds);
    minutes.textContent = formatingDigit(qtdMinutes);
    hours.textContent = formatingDigit(qtdHours);
    days.textContent = formatingDigit(qtdDays);
    
}

const countDown = (time) => {
    const stopCounting = () => clearInterval(id);
    const count = () => {
        if (time === 0){
            stopCounting();
        }
        update (time);
        time--;
    }
    const id = setInterval(count,1000);

}

const remainingTime = () => {
    const eventDate = new Date ('2025-03-04 20:00:00');
    const today = Date.now();
    return Math.floor((eventDate - today) / 1000);
}

countDown (remainingTime());