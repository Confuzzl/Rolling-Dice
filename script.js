function roll() {
    return Math.floor(Math.random() * 6 + 1);
}

function rollDice() {
    d1 = roll();
    d2 = roll();
    document.getElementById("d1").innerHTML = d1;
    document.getElementById("d2").innerHTML = d2;
    document.getElementById("sum").innerHTML = `Sum: ${d1 + d2}`;
}
