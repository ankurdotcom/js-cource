
// var is part of old JS (ES5 and before), while let & const are introduced in new JS  (ES6)

/**
 * // var have global scope
if(true){
    if(true){
        var age = 10;
        console.log(`1 Age ${age}`);
    }
    console.log(` 2 Age ${age}`);
}

console.log(` 3 Age ${age}`);
 */




/**
// var can be used before declaring & initialization , because its hoised  on top of its scope.

if(true){
    console.log('name ' + name1);
    var name1;
    name1 = 'Ankur';
    console.log('name ' + name1);
}
 */


// var add itself in to window object, But let and const not.
var varName = 'varNameValue';
let letName = 'letNameValue';
const constName = 'constNameValue';





/**
 * var can be re-assign & redeclare , 
 *  let can be re-assign but cant redeclare
 * const neither can re-assigned nor re-declare
 *  
 * 
 * */
if(true){
    var age;
    age = 20;
    console.log(` 1 Age ${age}`);
    var age; // Redeclarartioin allowed
    age = 30; // Re-assignment allowed
    console.log(` 2 Age ${age}`);
}

/**
 * here we see follwing error :
 * 
 * 
 * Cannot redeclare block-scoped variable 'studentName'.ts(2451)
let studentName: string
 * 

if(true){
    let studentName = 'ankur'
    console.log(` 1 Name ${studentName}`);
    let studentName = 'ankur'
    console.log(` 1 Name ${studentName}`);
}
 */

// Here let varibale assignment is working fine
if(true){
    let studentName = 'ankur'
    console.log(` 1 Name ${studentName}`);
    studentName = 'ankur'
    console.log(` 1 Name ${studentName}`);
}

