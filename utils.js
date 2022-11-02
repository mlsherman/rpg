function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    ) 
}
// per the code below taken from a website, I want to implement a bonus damage amount for 
// double dice or triple dice rolls for example if a hero rolls 2 or 3 of the same number like 
// 3 5's they do double damage. 

// $(document).ready(function () {
//     var rolls = 2;
//     var total = 0;
//     var dice = [];

//     for (var i = 1; i <= rolls; i++) {
//         var die = Math.floor((Math.random() * 6) + 1);
//         $("#Results").append("<div>die " + i + ": " + die + "</div>");

//         dice.push(die);
//         total += die;
//     }

//     if ($.grep(dice, function (elem) {
//         return elem === dice[0];
//     }).length == rolls) {
//         var die = Math.floor((Math.random() * 6) + 1);
//         total += die;
//         $("#Results").append("<div>EQUAL DICE! BONUS ROLL: " + die + "<div>");
//     }
//     $("#Results ").append("<div>TOTAL: " + total + "</div>");
// });

// const audioObj2 = new Audio("/audio/knights.mp3");
//         audioObj2.play();

const getPercentage2 = (remainingMana, maximumMana) => 
    (100 * remainingMana) / maximumMana

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        `<div class="placeholder-dice"></div>`
    ).join("")
}

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage, getPercentage2 }