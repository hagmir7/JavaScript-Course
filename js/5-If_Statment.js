// Conditinoals if Statements

let is_valid = true;
let soup = "Chicken moodle soup";
let reply;


if(soup){
    reply = `Here's your order of ${soup}`;
}else if (is_valid){
    console.log('this is the soupe')
}
else{
    reply = `Sorry, we're out of soup`;
}
console.log(reply);