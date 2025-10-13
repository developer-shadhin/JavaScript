// let x = 5;
// x **= 10;

// // x = x*10;

// console.log(x);

//increment and decrement
// let a = 5;
// // let b = ++a;
// let b = --a;

// console.log(b);

"\n"

//conditional operators
// let myAge = 20;
// let gfAge = '18';

// let equal = myAge === gfAge;

// console.log(equal);

//problem solving
// let age = 19;

// if (age >= 18){
//     console.log("you are eligible for vote.....");
// }else{
//     console.log("you are not eligible for vote.....");
// }


// let age = 19;
// let country = 'Europe';
// let citizen = 'n';

// if (age >= 18){
//     if (country === 'Europe'){
//         console.log("you are eligible for vote in Europe.....");
//     }
//     else{
//         console.log("you are eligible for vote but not in Europe.....");
//     }
// }
// else{
//     console.log("you are not eligible for vote.....");
// }

// if (age >= 18 && country === 'Europe' && citizen === 'yes'){
//     console.log("you are eligible for vote in Europe.....");
// }
// else{
//     console.log("you are not eligible for vote.....");
// }


let age = 20;

if (age > 20){
    console.log('you are  adult');
}else if (age > 18){
    console.log('you are  young');
}else if (age > 15){
    console.log('you are teenager');
}else if (age >= 10){
    console.log('you are child');
}else {
    console.log('you are baby');
}


//ternary operator
let isMember = 'premium';

let discount = isMember === 'premium' ? '10%' : '5%';
console.log(discount);


let x = 50;
let y = 10;

let max = (x > y) ? x : y;
console.log(max);