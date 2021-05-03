console.log('inside js file');

const play =  document.getElementById('play');
const stop =  document.getElementById('stop');
const reset = document.getElementById('reset');
const start = document.getElementById('start');
const hour =  document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

let secondId,minuteId,hourId;

play.addEventListener('click', () => {
   update();
});


reset.addEventListener('click',()=>{
    document.getElementById('hour').textContent="00";
    document.getElementById('minute').textContent="00";
    document.getElementById('second').textContent="00";
    clear();
});

stop.addEventListener('click',()=>{
    document.getElementById('start').style.visibility="visible";
    document.getElementById('stop').style.visibility="hidden";
    clear();

});
start.addEventListener('click',()=>{
    document.getElementById('start').style.visibility="hidden";
    document.getElementById('stop').style.visibility="visible";
    update();

});

function update(){
    secondId =  setInterval(() => {
        updateSeconds();
    }, 1000);

   minuteId =  setInterval(() => {
        updateMinutes();
    }, 60000);

   hourId =  setInterval(() => {
        updateHours();
    }, 3600000);

}

function clear(){
    clearInterval(secondId);
    clearInterval(minuteId);
    clearInterval(hourId);
    
}
function updateSeconds() {
    let secondtext = second.textContent;
    if (secondtext == 59)
        secondtext = 00;
    else
        secondtext = Number(secondtext) + 1;

    if (String(secondtext).length == 1)
        secondtext = '0' + secondtext;
    document.getElementById('second').textContent = secondtext;
}

function updateMinutes() {
    let minuteText = minute.textContent;
    if (minuteText == 59)
        minuteText = 00;
    else
        minuteText = Number(minuteText) + 1;

    if (String(minuteText).length == 1)
        minuteText = '0' + minuteText;
    document.getElementById('minute').textContent = minuteText;
}

function updateHours() {
    let hourText = hour.textContent;
    hourText = Number(hourText) + 1;

    if (String (hourText).length == 1)
    hourText = '0' + hourText;
    document.getElementById('hour').textContent = hourText;
}