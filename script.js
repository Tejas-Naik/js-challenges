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
