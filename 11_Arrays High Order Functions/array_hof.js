const employeeList = [{"id":1,"first_name":"Dix","last_name":"Matokhnin","email":"dmatokhnin0@amazon.com","gender":"Female","ip_address":"18.79.239.238"},
{"id":2,"first_name":"Pascale","last_name":"Garbett","email":"pgarbett1@bandcamp.com","gender":"Male","ip_address":"105.201.167.153"},
{"id":3,"first_name":"Tucky","last_name":"Sondon","email":"tsondon2@auda.org.au","gender":"Male","ip_address":"108.157.150.133"},
{"id":4,"first_name":"Richardo","last_name":"Keeble","email":"rkeeble3@omniture.com","gender":"Male","ip_address":"238.57.169.67"},
{"id":5,"first_name":"Eartha","last_name":"Noen","email":"enoen4@senate.gov","gender":"Female","ip_address":"81.28.148.88"},
{"id":6,"first_name":"Demetris","last_name":"Matovic","email":"dmatovic5@newyorker.com","gender":"Agender","ip_address":"35.46.84.29"},
{"id":7,"first_name":"Reynolds","last_name":"Lindley","email":"rlindley6@prnewswire.com","gender":"Male","ip_address":"34.72.206.9"},
{"id":8,"first_name":"Sig","last_name":"Seleway","email":"sseleway7@youtube.com","gender":"Male","ip_address":"66.18.226.248"},
{"id":9,"first_name":"Vanni","last_name":"Krolman","email":"vkrolman8@yellowpages.com","gender":"Female","ip_address":"11.241.92.221"},
{"id":10,"first_name":"Aguste","last_name":"Ketley","email":"aketley9@nature.com","gender":"Male","ip_address":"199.103.108.107"}];


// console.log(`${employeeList.length}`);

/**
// forEach is higher order function because its take another function as argument.

employeeList.forEach(printEmployeeName);

function printEmployeeName (emp){
    console.log(`${emp.first_name} ${emp.last_name}`);
}

employeeList.forEach((val) => console.log(`${val.first_name} Gupta`));
 */

// -----------------------------------------------------

/** 
// ForEch anbd Map do almost same thing except ForEach do not return any thing, while Map return a new array with updated array if performed any operation

const numbers = [1,2,3,4,5,6,7,8];

function doDouble(num) {
    return num * 2;
}

let result1 = numbers.forEach(doDouble);
console.log(`result1 ${result1}`); // result1 undefined

let result2 = numbers.map(doDouble);
console.log(`result2 ${result2}`); // result2 2,4,6,8,10,12,14,16
*/




// ------------------ FlatMap 

const arr1 = [0,1,-1];

if(arr1[0]){
    console.log(arr1[0]);
} else if(arr1[1]){
    console.log(arr1[1]);
} else if(arr1[2]){
    console.log(arr1[2]);
} else if(arr1[0] === 0){
    console.log(arr1[0]);
} ;

