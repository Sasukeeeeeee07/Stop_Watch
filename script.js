let [seconds,minutes,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let Timer = null;

function stopwatch(){
  seconds++;
  if(seconds==60){
    seconds=0;
    minutes++;
    if(minutes==60){
      minutes=0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = hours < 10 ? "0" + minutes : minutes;
  let s = hours < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(){
  if(Timer!=null){
    clearInterval(Timer);
  }
  Timer = setInterval(stopwatch,1000);
}

function watchStop(){
  clearInterval(Timer);
}

function watchReset(){
  clearInterval(Timer);
  [seconds,minutes,hours] = [0,0,0];
  displayTime.innerHTML="00:00:00";
}