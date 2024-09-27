
// /*
// 27.Determine Age Group Based on Input (if-else): Write a function
// determineAgeGroup(age) that outputs the age group based on input:
// • 0-12 years: "Child"
// • 13-19 years: "Teenager"
// • 20-64 years: "Adult"
// • 65+ years: "Senior"
// */

// function determineAgeGroup(age) {
//     if (age >= 0 && age <= 12) {
//         return "Child";
//     } else if (age >= 13 && age <= 19) {
//         return "Teenager";
//     } else if (age >= 20 && age <= 64) {
//         return "Adult";
//     } else if (age >= 65) {
//         return "Senior";
//     }
// }



// // Call Function:

// console.log(determineAgeGroup(10));  // Output: "Child"
// console.log(determineAgeGroup(15));  // Output: "Teenager"

// /*
// 28.Grade Evaluation (Switch Statement): Write a function getGrade(score) that
// returns a grade based on the following:
// • A: 90-100
// • B: 80-89
// • C: 70-79
// • D: 60-69
// • F: Below 60 If the score is out of range (less than 0 or greater than 100),
// return "Invalid score."
// */

// function getGrade(score) {
//     switch (true) {
//         case score >= 90 && score <= 100:
//             return "A";
//         case score >= 80 && score < 90:
//             return "B";
//         case score >= 70 && score < 80:
//             return "C";
//         case score >= 60 && score < 70:
//             return "D";
//         case score < 60:
//             return "F";
//         default:
//             return "Invalid score.";
//     }
// }



// // Call Function:

// console.log(getGrade(90));     //Output: A
// console.log(getGrade(60));     //Output: D
// console.log(getGrade(30));     //Output: F

// /*
// 29.Check Even or Odd (if statement): Write a function checkEvenOdd(number) that
// returns whether the number is "Even" or "Odd."
// */
// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// // Call Function:

// console.log(checkEvenOdd(52));          // Output: Even
// console.log(checkEvenOdd(67));          // Outrput: Odd


// /*
// 30.Simple Object Creation: Create a car object with properties:
// • make: car manufacturer (e.g., "Toyota")
// • model: car model (e.g., "Corolla")
// • year: manufacturing year (e.g., 2020)
// */

// let car = {
//     make: "Maruti Suzuki",
//     model: "Swift",
//     year: 2015,
// }

// // Call Function:
// console.log(car.make);          // Output: Maruti Suzuki
// console.log(car.model);         // Output: Swift
// console.log(car.year);          // Output: 2015




let array = [1, 2, 3, 4, 5];
let newArray = array.slice(0, 3); // Extracts elements from index 

console.log(newArray); 
console.log(array); 


let array1 = [1, 2, 3, 4, 5];

// Remove elements starting from index 1 and insert 10, 20 in their place
let removedElements = array.splice(1, 2, 10, 20);

console.log(array);            // Output: [1, 10, 20, 4, 5] (original array is modified)
console.log(removedElements);   // Output: [2, 3] (removed elements)


