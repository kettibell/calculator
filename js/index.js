document.querySelectorAll('.calc .digits-oper').forEach(el=>el.addEventListener('click', pressedDigitOrOper));

function pressedDigitOrOper(ev) {
    const displ = document.querySelector('.calc .displ');
    displ.value += ev.target.innerText;
}

document.querySelector('.calc .eval').addEventListener('click', evaluate);

function evaluate() {
    const displ = document.querySelector('.calc .displ');
    displ.value = eval(displ.value);
}

document.querySelector('.calc .clear').addEventListener('click', clearAll);

function clearAll() {
    const displ = document.querySelector('.calc .displ');
    displ.value = "";
}

document.querySelector('.calc .sqrt').addEventListener('click', mathSqrtOur);

function mathSqrtOur() {
    const displ = document.querySelector('.calc .displ');
    displ.value = Math.sqrt(displ.value);
}
