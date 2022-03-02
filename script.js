// Numbers
// An integer is a whole number.
const number = 52;
const float = 52.60;
const stringNumber = "42";

/* 
A number with a decimal point is float which
references the "floating point"
*/


//  Return True becuas equal value and equalt type is the same
console.log(number === float);
console.log(number == float);
//  Return flase becuas equal value and equalt type is not the same
console.log(number == stringNumber);
console.log(stringNumber === number);

// Return the string Number to a whole number
console.log(typeof Number(stringNumber));

// return not number (NaN) bcs we can not convert the whole string to a number
console.log(Number("Hassan Agmir"));

// Return 1 or 0 if we convert a boolean type to a number
console.log(Number(true)) // true = 1
console.log(Number(false)) // false = 0



/*
 The Number.parseFloat() method parses an argument and returns
 a floating point number cannot be parsed from the argument,
 it returns Nan
*/

//  Return true becaus 52 is a number
console.log(Number.isInteger(number));
// Return false becaus the type of "52" is not integer
console.log(Number.isInteger(stringNumber))
// Return 52.01 = 52.01 || 52.0 = 52 || 52.60 = 52.6
console.log(Number.parseFloat(float))
//  Return string type to float type 342.34has = 342.34
console.log(Number.parseFloat("342.34has"))


console.log(float.toFixed(3))




