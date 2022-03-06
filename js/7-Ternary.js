// Conditinoals: Ternary operators

// Syntax
// condition ? if True : if False
32 > 4 ? console.log("Yes 32 is grater then 4") : console.log("what happend")


let soup = "Chicken Noddle Soup";
let isCustomerBannd = false
let soupAccess = isCustomerBannd
    ? "Sorry, No soup for you!"
    : soup


console.log(soupAccess)


let testScore = 89;

let myGrade =
    testScore > 89 ? "A"
        : testScore > 79 ? "B"
            : testScore > 69 ? "A"
                : testScore > 50 ? "B"
                    : "F"
console.log(myGrade)
