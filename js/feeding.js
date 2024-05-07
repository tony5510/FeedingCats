import isDataCorrect from './isDataCorrect.js'

const startButton = document.querySelector('button');

function delay(time) {
    return new Promise(res => setTimeout(res, time));
}

startButton.addEventListener('click', async function() {
    
    const n = parseInt(document.getElementById("n").value);
    const m = parseInt(document.getElementById("m").value);
    const b = parseInt(document.getElementById("b").value);
    const t = parseInt(document.getElementById("t").value);
    const r = parseInt(document.getElementById("r").value);
    const outputField = document.getElementById('messages');

    const isCorrect = isDataCorrect(n, m, b, t, r);

    if (isCorrect === true) {
        this.disabled = true;
        this.classList.add('disabled-button');
        this.textContent = "Идет симуляция..."

        await startFeeding(n, m, b, t, r);
        
        this.disabled = false;
        this.classList.remove('disabled-button');
        this.textContent = "Запустить симуляцию"
    } else {
        outputField.innerHTML = isCorrect;
    }
});

async function startFeeding(n, m, b, t, r) {
    let food_in_bowl = m;
    const startTime = Date.now();

    const outputField = document.getElementById('messages');
    outputField.innerHTML = '';

    for (let i = 0; i < n; i++) {
        outputField.innerHTML += `Котик под номером ${i+1} подошел к миске.<br>`;
        
        if (food_in_bowl < b) {
            outputField.innerHTML += `Бабушка наполняет миску...<br>`;
            await delay(r * 1000);
            food_in_bowl = m;
        }

        await delay(t * 1000);
        food_in_bowl -= b;
        outputField.innerHTML += `Котик под номером ${i+1} отошел от миски.<br>`;
    }

    const totalTime = (Date.now() - startTime) / 1000;
    outputField.innerHTML += `Все котики накормлены. Затрачено времени: ${totalTime} секунд.<br>`;
}
