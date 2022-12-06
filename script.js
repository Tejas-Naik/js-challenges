// JS Funcdamentals - Part 1
/*
// Challenge #1
const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / (marksHeight * 2);
const johnsBMI = johnsMass / (johnsHeight * 2);

const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

*/
/*
// Challenge #2
// Printing who has more BMI
const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / (marksHeight * 2);
const johnsBMI = johnsMass / (johnsHeight * 2);

if (marksBMI > johnsBMI) {
    console.log(`Marks BMI(${marksBMI}) is higher than Johns BMI(${johnsBMI})`);
} else {
    console.log(`Johns BMI(${johnsBMI}) is higher than Marks BMI(${marksBMI})`);
}
*/
/*
// Challenge #3
// Gymnastics Teams winner
const koalasScores = 97 + 112 + 101;
const dolphisScores = 109 + 95 + 106;
const dolphinsAvarage = dolphisScores / 3;
const koalasAvarage = koalasScores / 3;

if (koalasAvarage > dolphinsAvarage && koalasAvarage >= 100) {
    console.log("Koalas Win");
} else if (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) {
    console.log("Dolphins Win");
} else if (dolphinsAvarage === koalasAvarage && dolphinsAvarage >= 100 && koalasAvarage >= 100) {
    console.log("DRAW");
} else {
    console.log("NOBODY Wins");
}
*/

/*
// Tip Calculator
const bill = 100;
console.log((bill >= 50 && bill <= 300) ? `${bill} + ${bill * .15} = ${bill + bill * .15}` : `${bill} + ${bill * .2} = ${bill + bill * .2}`);
*/
/*
// JS Funcdamentals - Part 2
// Gymnastics Part 2
const calcAvarage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
const checkWinner = function (avarageKoalas, avarageDolphins) {
    if (avarageKoalas > (avarageDolphins * 2)) {
        console.log("Koalas Win")
    } else if (avarageDolphins > (avarageKoalas * 2)) {
        console.log("Dolphins Win");
    } else {
        console.log("NOBODY win");
    }
}

const dolphisAvarage = calcAvarage(85, 54, 41);
const koalasAvarage = calcAvarage(23, 34, 27);
checkWinner(koalasAvarage, dolphisAvarage);
*/
/*
// TipS Calculator
const calcTip = bill => (bill >= 50 && bill <= 300) ? `${bill * .15}` : `${bill * .2}`;
const bills = [125, 555, 44];
const tips = [];
for (let i = 0; i < bills.length; i++) {
    tips[i] = +calcTip(bills[i])
}
console.log(tips);
const totals = [];
for (let i = 0; i < bills.length; i++) {
    totals[i] = +bills[i] + +tips[i];
}

console.log(totals);
*/
/*
// BMIs with Objects
const john = {
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
    }
}

const mark = {
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john.bmi, mark.bmi);
*/
/*
// Tip calculator with loops
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    let tip = bills[i] <= 300 && bills[i] >= 50 ? bills[i] * .15 : bills[i] * .2;
    tips[i] = tip;
    totals[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAvarage = function (arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log(
    calcAvarage(bills),
    calcAvarage(tips),
    calcAvarage(totals),
);
*/
/*
// football betting app.
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

// 1)
const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);

// 2)
const [gk, ...feildPlayers] = players1;
console.log(gk, feildPlayers);

// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5)
const { team1, x: draw, team2 } = game.odds
console.log(team1, draw, team2);
console.log(game.odds);

// 6)
const printGoals = function (...players) {
    const playersGoals = [...players]
    const goals = {}
    for (const player of playersGoals) {
        let count = 0;
        playersGoals.forEach(element => {
            if (element === player) {
                count += 1;
            }
        });
        goals[`${player}`] = count;
    }
    console.log(goals);
}

printGoals(...game.scored);

// #2
// 1)
for (const [i, shooter] of game.scored.entries()) {
    console.log(`Goal ${i + 1} : ${shooter}`);
}

// 2) 
let sum = 0;
let length = 0;
for (const value of Object.values(game.odds)) {
    sum += value;
    length += 1;
}
console.log(`The avarage Odd is ${sum / length}`);

// 3)
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 4)
const scorers = {};

// for (const shooter of game.scored) {
//     scorers[shooter] = scorers[shooter] ? scorers[shooter] + 1 : 1;
// }

for (let x of game.scored) {
    scorers[x]++ || (scorers[x] = 1);
}

console.log(scorers);
*/

// 3) 
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// 1)
const events = []
for (const [time, event] of gameEvents) {
    events.push(event);
}
console.log([...new Set(events)]);

// 2) 
gameEvents.delete(64);

// 3)
console.log(`An event happened on an avarage of ${Array.from(gameEvents.keys()).pop() / gameEvents.size}`);

// 4) 
for (const [time, event] of gameEvents) {
    const half = time <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half}HALF] ${time} : ${event}`);
}