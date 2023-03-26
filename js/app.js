Date.prototype.addHours= function(h) {
    this.setHours(this.getHours()+h);
    return this;
}

let timezone = 0;

function countdown() {
    let $timezoneSelect = document.querySelector('.select'),
        timezone = parseInt((localStorage.getItem('timezone') === undefined) ? 0 : localStorage.getItem('timezone')),
        dateEnd = new Date('2023-04-02 19:00:00'),
        dateNow = new Date().addHours(timezone),
        date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000),
        dataLeft = date,
        dateTemp = 0;

    $timezoneSelect.value = timezone;

    dateTemp = Math.floor(dataLeft / (24 * 60 * 60));
    dataLeft -= dateTemp * 24 * 60 * 60;
    dateTemp = (dateTemp < 10) ? '0' + dateTemp : dateTemp;
    document.querySelector('#days span').innerHTML = dateTemp;

    dateTemp = Math.floor(dataLeft / (60 * 60));
    dataLeft -= dateTemp * 60 * 60;
    dateTemp = (dateTemp < 10) ? '0' + dateTemp : dateTemp;
    document.querySelector('#hours span').innerHTML = dateTemp;

    dateTemp = Math.floor(dataLeft / (60));
    dataLeft -= dateTemp * 60;
    dateTemp = (dateTemp < 10) ? '0' + dateTemp : dateTemp;
    document.querySelector('#minutes span').innerHTML = dateTemp;

    dataLeft = (dataLeft < 10) ? '0' + dataLeft : dataLeft;
    document.querySelector('#seconds span').innerHTML = dataLeft;
}

document.querySelector(".select").addEventListener("change", (event) => {
    timezone = parseInt(event.target.value);
    localStorage.setItem('timezone', timezone);
    countdown(timezone);
});

countdown();
setInterval( countdown, 1000);