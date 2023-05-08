const hr = document.getElementById("hour")
const min = document.getElementById("minute")
const sec = document.getElementById("second")
const milsec = document.getElementById("milisecond")
const ap = document.getElementById("ampm")


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ms = new Date().getMilliseconds();
    let a = "AM"

    if(h > 12){
        h= h-12
        a = "PM"
    }
    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;
    ms = ms < 10 ? "00" + ms : (ms < 100 ? "0" + ms : ms);

    hr.innerText = h;
    min.innerText = m;
    sec.innerText=s;
    milsec.innerText=ms;
    ap , (innertext = a);

    setTimeout(()=> {
        updateClock();
    },1)


}
updateClock();