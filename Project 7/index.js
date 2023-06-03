const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remCounterEl = document.getElementById("remaining-counter");



textareaEl.addEventListener('keyup', () => {
    updateCounter();
});
updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}