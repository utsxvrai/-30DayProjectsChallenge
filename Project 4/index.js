const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const dayEl = document.querySelector(".days");




const monthInx = new Date().getMonth(); //gives index of month
//to get the last date of the month monthInx+1 is givng the date before hte month
const lastDate = new Date(new Date().getFullYear(), monthInx+1,0).getDate();
const FirstDate = new Date(new Date().getFullYear(), monthInx,1).getDay()-1;

//only getmonth() will give the index of the array of the moneth so we have to create an array of month to access the name of the month

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

//here we'll extrax=ct the name of the month with the help of the array of the month craeted abobve

monthEl.innerText = months[monthInx];
fullDateEl.innerText= new Date().toDateString();


let days="";

for(let i = FirstDate ; i>0 ; i--){
    
    days += `<div class="empty"></div>`;
}
for(let i = 1 ; i <= lastDate ; i++ ){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;

    }
    days += `<div>${i}</div>`;
}

dayEl.innerHTML=days;