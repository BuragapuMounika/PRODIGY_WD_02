// script.js

let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    }
    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    isRunning = false;
    startStopBtn.textContent = 'Start';
    updateDisplay();
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

updateDisplay();
