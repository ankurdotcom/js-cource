// Logical operator 
// && (AND) 
// || (OR)
// !  (NOT)



const MALE = 'MALE';
const FEMALE = 'FEMALE';

const MALE_MARRIAGE_AGE = 21;
const FEMALE_MARRIAGE_AGE = 18;



const age = 20;
const gender = FEMALE;

let isEligibleOfMarriage = (gender == MALE && age >= MALE_MARRIAGE_AGE)  || (gender == MALE && age >= FEMALE_MARRIAGE_AGE)

console.log(`Allowed for Marrriage : ${isEligibleOfMarriage}`);

console.log(`Not Allowed for Marrriage : ${!isEligibleOfMarriage}`);
