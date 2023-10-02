function sayHello() {
    console.log(`Hello Ankur`);
}

/**
function sayHello(user) {
    console.log(`Hello ${user}`);
}
 */

sayHello(); // Hello Ankur
sayHello('Ambar'); // Hello Ankur


// -------------------------------

// IMP !!!  same name function with parameter, replaced previous one when calling

function sayHello() {
    console.log(`Hello Ankur2`);
}

function sayHello(user) {
    console.log(`Hello ${user}`);
}

sayHello(); // Hello undefined
sayHello('Ambar2'); // Hello Ambar2

// ------------------------------


// IMP !!!  same name function with parameter, replaced previous one when calling

function sayHello(user) {
    console.log(`Hello ${user}`);
}

function sayHello() {
    console.log(`Hello Ankur3`);
}

sayHello(); // Hello Ankur3
sayHello('Ambar3'); // Hello Ankur3


// ------------------------------
function sayHello(user) {
    console.log(`Hello ${user}`);
}

function sayHello() {
    console.log(`Hello Ankur4`);
}

function sayHello(user, user2) {
    console.log(`Hello ${user} and ${user2}`);
}

sayHello(); // Hello undefined
sayHello('Ambar4'); // Hello Ambar2
sayHello('Ambar4','arav4'); // Hello Ambar2

// IMP !!!  in case of same name function with different parameter, last most will replace all previous one when calling




// ---------------------------------------


// interal 'arguments' object store all passed parameter dyamamically.
function addNumbers(){
    console.log(arguments);
    let ans = 0;
    for(let i = 0; i < arguments.length; i = i + 1){
        ans = ans + arguments[i];
    }
    return ans;
}

addNumbers(1,2);

/**
 * 
 * Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0:1
1:2
callee
: 
ƒ addNumbers()
length
.
.
.
.
 */

addNumbers(20,10,100);

/**
 * 
 * Arguments(3) [20, 10,100 callee: ƒ, Symbol(Symbol.iterator): ƒ]
0:20
1:10
2:100
callee
: 
ƒ addNumbers()
length
.
.
.
.
 */

let result = addNumbers(20,10,100);
console.log(`result : ${result}`);