let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapTimes = [];

function startStopwatch() {
    timer = setInterval(updateDisplay, 1000);
}

function pauseStopwatch() {
    clearInterval(timer);
}

function resumeStopwatch() {
    startStopwatch();
}

function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    lapTimes = [];
    updateLapTimes();
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.querySelector('.display');
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function recordLapTime() {
    lapTimes.push(`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`);
    updateLapTimes();
}

function updateLapTimes() {
    const lapTimesContainer = document.querySelector('.lap-times');
    lapTimesContainer.innerHTML = '';
    lapTimes.forEach((lap, index) => {
        const lapItem = document.createElement('div');
        lapItem.textContent = `Lap ${index + 1}: ${lap}`;
        lapTimesContainer.appendChild(lapItem);
    });
}

function lapReset() {
    recordLapTime();
    resetStopwatch();
}

