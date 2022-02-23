const getScores = {
    nums : [],
    // "get", to call on the value of a property by executing a func.
    // Must have an empty parameter.
    get highestScore() { 
        const {nums} = this;
        nums.sort((x,y) => y-x);
        return nums[0];
    },
    // "set", to update/change value of a property by executing a func
    set addScore(newScore) {
        this.nums.push(newScore);
    }
}

getScores.addScore = 20;
getScores.addScore = 40;
getScores.addScore = 50;


console.log(getScores.highestScore); // 50
console.log(getScores.nums); // [20,40,50]