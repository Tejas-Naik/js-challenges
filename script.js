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


