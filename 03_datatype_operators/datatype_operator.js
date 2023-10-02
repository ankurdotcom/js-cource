console.log('1' + '1'); // '11' : String
console.log('1' + 1); // '11' : String
console.log('1' * 1); // 1 : number
console.log('1234' * 1); // 1234 : number
console.log('abc' * 1); // NaN

let studentName = null; // here Initilised value is null, Its a value and take some space
let studentName2 = undefined; // here Initilised value is undefined, Its not a value and do not take space

console.log(`studentName : ${studentName}`);
console.log(`studentName2 : ${studentName2}`);

// Object

const student = {
    firstName : 'Ankur',
    lastName : 'Gupta',
    rollNumber : '204030',
    section : 5,
    age : 10
}

console.log(`Student => ${student}`);
console.log(`Student Age => ${student.age}`);
console.log(`Student Age => ${student['age']}`);
