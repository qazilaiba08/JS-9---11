
// // Q # 1

//  // Take city name as input from user
//  let city = prompt("Enter the name of your city:");

//  // Check if the entered city is Karachi
//  if (city === "karachi") {
//      document.write("Welcome to the city of lights");
//  } else {
//      document.write("Welcome to " + city );
//  }

//  // Q#2

//  // take gender as input from user
//  let gender = prompt("Enter your gender:");

//   // Check if the entered  male
//   if(gender === "male"){
//     alert("Good morning Sir")
//   }
//   else{
//     alert("Good morning ma'am")
//   }

//   // Q# 3

//  // take color signal as input from user 

//  let signals = prompt("Enter your color signal:");
//   // Check if the entered  red
//   if(signals === "red"){
//     document.write("Must stop")
//   }
//   else if(signals === "yellow"){
//     document.write("Ready to go !")
//   }
//   else {
//     document.write("Move now")
//   }

//   // Q #4

//   let fuel = +prompt("Enter the remaining fuel in the liter's");

//   if(fuel <= 0.25) {
//     document.write("please refill the fuel")
//   }
//   else{
//     document.write("remaining fuel fill")
//   }

//   //Q#5

//  // a.
//    var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //b
// var b = 82
// if (b++ === 83){
//     alert("given condition for variable b is true");
//     }

//     //c
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// //d
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// //e
//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//     //f
// if("car" < "cat"){
//         alert("car is smaller than cat");
//         }

//         //Q#6
//         let marks1 = +prompt("Enter the marks obtained in subject 1:");
//         let marks2 = +prompt("Enter the marks obtained in subject 2:");
//         let marks3 = +prompt("Enter the marks obtained in subject 3:");

//         let totalMarks = +prompt("Enter the total marks:");
//         let marksObtained = +prompt("Enter the marks obtained");

//         let percentage1 = (marks1 / totalMarks)*100
//         let percentage2 = (marks2 / totalMarks)*100
//         let percentage3 = (marks3 / totalMarks)*100

//         let grade;
//         let remarks;

//         if (percentage1 >= 90) {
//             grade = "A+";
//             remarks = "Excellent";
//         } else if (percentage2 >= 80) {
//             grade = "A";
//             remarks = "Very Good";
//         } else if (percentage3 >= 70) {
//             grade = "B";
//             remarks = "You need to improve";
//         } else if (percentage2 >= 60) {
//             grade = "C";
//             remarks = "Average";
//         } else if (percentage1 >= 50) {
//             grade = "D";
//             remarks = "Pass";
//         } else {
//             grade = "F";
//             remarks = "Fail";
//         }

//         document.write("<h2> Mark Sheet </h2>");
//         document.write("Total Marks : "+totalMarks+"<br>");
//         document.write("Marks Obtained: "+ marksObtained+"<br>");
//         document.write("Precentage: "+ percentage3+"   % "+"<br>"); 
//         document.write("Grade: "+ grade+" "+"<br>"); 
//         document.write("Remarks: "+ remarks+" "+"<br>");

//         //Q#7
       
//            // Store a secret number (ranging from 1 to 10) in a variable
//            let secretNumber = Math.floor(Math.random() * 10) + 1;

//            // Prompt user to guess the secret number
//            let userGuess = +prompt("Guess the secret number (between 1 and 10):") ;

//         // Check if the user's guess is correct
//         if (userGuess === secretNumber) {
//             alert("Bingo! Correct answer");
//         } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//             alert("Close enough to the correct answer");
//         } else {
//             alert("Try again! The secret number was " + secretNumber);
//         }

//         // Q # 8

//        let num = +prompt("Enter your number");
//         if(num % 3 == 0){
//     alert(num +"is a divisble of 3");
//          }
//       else{
//     alert(num + "is not a divisble of 3");
//         }

       // Q #9 
      
    // let number = +prompt("Enter your number");

    // if(number % 2 == 0){
    //      alert(number+"is a even number");
    // }
    // else {
    //     alert(number + "is a odd number");
    // }
    
    // Q#10
 
    let temp = +prompt("Enter the tempreture");

    if (temp > 40) {
      alert("It is too hot outside.") 
  } else if (temp > 30) {
      alert("The Weather today is Normal.") 
  } else if (temp > 20) {
      alert("Today's Weather is cool.")
  } else if (temp > 10) {
      alert("OMG! Today's weather is so Cool.")
  } else {
      alert("It's quite cold outside.")
  }
    
  // Q #11
  var firstNumber = parseFloat(prompt("Enter the first number :"));  
  var secondNumber = parseFloat(prompt("Enter the second number :"));  

  var opreation = prompt("Enter the opreations (+,-,*,/,%):");
  var result;

  if (opreation === "+"){
    result = firstNumber + secondNumber;
  }
  else if(opreation === "-"){
    result = firstNumber - secondNumber;
  }
  else if(opreation === "*"){
    result = firstNumber * secondNumber;
  }
  else if(opreation === "/"){
    result = firstNumber / secondNumber;
  }
  else if(opreation === "%"){
    result = firstNumber % secondNumber;
  }
  else{
   console.log("invalid opreation")
  }
 
  console.log("Result" + result);