const clock = document.querySelector("h2#clock")

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock() // 새로고침하자마자 시간을 가져오도록
setInterval(getClock, 1000); //그 후로 1초마다 갱신
