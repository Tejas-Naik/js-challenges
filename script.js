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

// Tip Calculator
const bill = 100;
console.log((bill >= 50 && bill <= 300) ? `${bill} + ${bill * .15} = ${bill + bill * .15}` : `${bill} + ${bill * .2} = ${bill + bill * .2}`);

