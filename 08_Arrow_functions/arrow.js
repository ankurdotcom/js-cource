
/**

// arguments object not defined in Arrow Function But defined in Normal Function


const addNumbers = () => {
    console.log(arguments);
    let ans = 0;
    for(let i = 0; i < arguments.length; i = i + 1){
        ans = ans + arguments[i];
    }
    return ans;
}

addNumbers(1,2); // Error : arguments is not defined

 
// ------------------------------


const addNumbers2 = (...numbers) => {
    let ans = 0;
    for(let i = 0; i < numbers.length; i = i + 1){
        ans = ans + numbers[i];
    }
    return ans;
}

let result2 = addNumbers2(20,10,100);
console.log(`result 2 : ${result2}`);

*/





/**
// Arrow Function does NOT SUPPORT HOISTING But  Normal Function does

sayHello();

function sayHello() {
    console.log('Normal function Hello');
}



// ------

sayHello(); // Cannot access 'sayHello' before initialization

const sayHello = () => {
    console.log('Normal function Hello');
}

 */


/**
// 'this' keyword store window object, and its scope is global, while Normal function store parent scope memevr varibale and fucntions in 'this' keyword

// Normal function

const obj = {
    value : 20,
    myFunc : function () {
        console.log(this.value); // 20
        console.log(this); // {value: 20, myFunc: ƒ}
    }
}

obj.myFunc();



// Arrow function

const obj2 = {
    value : 20,
    myFunc : () => {
        console.log(this.value); // undefined
        console.log(this); // Window Object
    }
}

obj2.myFunc();

 */