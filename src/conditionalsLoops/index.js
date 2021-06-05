//! CONDITIONALS

//? if-else
// var date = new Date();
// var hour = date.getHours();

// if (hour >= 5 && hour <= 11) {
//     console.log('Good Morning!');
// } else if (hour > 11 && hour < 17) {
//     console.log('Good Afternoon!');
// } else if (hour >= 17 && hour < 23) {
//     console.log('Good Evening!');
// } else {
//     console.log('Good Night!!');
// }

//? SWITCH-CASE

// var language = prompt('What is your language?');

// switch (language) {
//     case 'fr':
//         console.log('French');
//         break;
//     case 'tr':
//         console.log('Turkish');
//         break;
//     default:
//         console.log('English');
//         break;
// }

//! LOOPS
//? for
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         // break; // end function
//         continue; // pass iteration
//     }
//     console.log(i);
// }

//? while
// var number = 1;
// while (number < 10) {
//     console.log(number);
//     number++;
// }

//? do-while
var age = prompt('What is your age?');
var result = '';
do {
    result += age;
    result += '-';
    age--;
} while (age > 0);
console.log(result);
