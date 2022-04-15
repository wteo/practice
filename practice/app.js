// Build a function where you roll 3 dices at once and get the total result.

function roll() {
    const getResult = () => {
        const dice = [1,2,3,4,5,6];
        const idx = Math.floor(Math.random() * dice.length);
        return dice[idx];
    }
    return getResult() + getResult();  
}

console.log(roll());



