// Higher Order Function are functions who accept another function as arugument.
// They Can also return a funtion too if needed

// way 1
/**
function add(a, b, cb){
    let sum  = a + b;
    cb(sum);
}

add(2,4, function (val) {
    console.log(`result ${val}`);
});

 */

// way 2

/**  
function add(a, b, cb){
    let sum  = a + b;
    cb(sum);
}

function showResult(val) {
    console.log(`result 2 ${val}`);
}

add(2,4, showResult);

*/



// way 3

/**  
function add(a, b, cb){
    let sum  = a + b;
    cb(sum);
}

add(2,4, (val) => console.log(`result 3 ${val}`) );
add(2,4, val => console.log(`result 3-A ${val}`) );
*/


// way 4

/**  */
function add(a, b, cb){
    let sum  = a + b;
    cb(sum);

    return function doAnother() {
        console.log(`result 4-A ${sum}`);
    }
}

const resultFun = add(2,4, (val) => console.log(`result 4 ${val}`) );
resultFun();



