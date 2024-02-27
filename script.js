let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let records = [];

function startStop() {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startStop").textContent = "Stop";
    isRunning = true;
  } else {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
  }
}

function recordTime() {
  if (isRunning) {
    records.push(`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`);
    updateRecords();
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById("startStop").textContent = "Start";
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  records = [];
  updateRecords();
  updateTime();
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const display = document.getElementById("display");
  display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function updateRecords() {
  const recordsList = document.getElementById("records");
  recordsList.innerHTML = "";
  records.forEach(record => {
    const li = document.createElement("li");
    li.textContent = record;
    li.classList.add("record-item");
    recordsList.appendChild(li);
  });
}
