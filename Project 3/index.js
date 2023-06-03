const ho = document.querySelector(".hour")
const min = document.querySelector(".minute")
const sec = document.querySelector(".second")


function updateClock(){
    const currentTime = new Date();
    // setTimeout(updateClock, 1000)
    const h = currentTime.getHours()
    const m = currentTime.getMinutes()
    const s = currentTime.getSeconds()

    const hd= (h/12)* 360;
    ho.style.transform = `rotate(${hd}deg)`;
    const md= (m/60)* 360;
    min.style.transform = `rotate(${md}deg)`;
    const sd= (s/60)* 360;
    sec.style.transform = `rotate(${sd}deg)`;
}

setInterval(updateClock,1000);