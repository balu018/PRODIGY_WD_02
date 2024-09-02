let timerInterval;
let startTime = 0;
let elapsedTime = 0;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);

    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'inline-block';
    document.getElementById('reset').style.display = 'none';
}

function stopTimer() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;

    document.getElementById('stop').style.display = 'none';
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('reset').style.display = 'inline-block';
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    document.getElementById('timer').innerHTML = '00:00:00:00';

    document.getElementById('reset').style.display = 'none';
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('stop').style.display = 'none';
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    document.getElementById('timer').innerHTML =
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}:` +
        `${milliseconds.toString().padStart(2, '0')}`;
}
