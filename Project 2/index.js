const d = document.getElementById("day")
const h = document.getElementById("hour")
const m = document.getElementById("min")
const s = document.getElementById("second")

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime-now;

    const second = 1000;
    const minute = second*60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const da = Math.floor(gap/day);
    const ho = Math.floor((gap%day) / hour);
    const mi = Math.floor((gap%hour)/minute);
    const se = Math.floor((gap%minute)/second);

    d.innerText = da;
    h.innerText = ho;
    m.innerText = mi;
    s.innerText = se;

    setTimeout(updateCountdown, 1000)

}