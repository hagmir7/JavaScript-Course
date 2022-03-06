// Numbers
// An integer is a whole number.
const number = 52;
const float = 52.60;
const stringNumber = "52";

/* 
A number with a decimal point is float which
references the "floating point"
*/


//  Return True becuas equal value and equalt type is the same
console.log(number === float);
console.log(number == float);
//  Return True becuas they has the same value
console.log(number == stringNumber);
//  Return flase becuas they has the same value  But not the same type
console.log(stringNumber === number);

// Convert the string Number to a whole number
console.log(typeof Number(stringNumber));
console.log(typeof parseInt(stringNumber));
console.log(typeof stringNumber);

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
console.log(Number.parseFloat(52.0))
//  Return string type to float type 342.34has = 342.34
console.log(Number.parseFloat("342.34has"))

// Add numbers of zeros after the point
console.log(float.toFixed(10)) // 52.6 = 52.600
// Return any type to Integer type 
console.log(Number.parseInt(float)) // 52

// Return any type to string type
console.log(typeof float.toString()) // string

console.log(typeof Number.parseFloat(stringNumber)) // number
// return strign to float point number
console.log(Number.parseFloat("23.33")) // 23.33


// NaN

// return true if value is not number
console.log(isNaN("Hassan Agmir"))







