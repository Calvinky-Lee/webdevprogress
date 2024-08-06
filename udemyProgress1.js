//---------------------Lesson 84---------------------------
// var input = prompt("Enter In Your Paragraph");

// var characterCount = input.length;
// var remainingCount = 140 - parseInt(characterCount);

// var inputUnder140 = input.slice(0.140)

// alert(input)
// alert("In this prompt, You have used " + characterCount + " Characters. you have " + remainingCount + " Characters left")

//---------------------Lesson 85---------------------------
// .toUpperCase();
// .toLowerCase();

// var name = prompt("what is your Name? ");
// alert( "Hello " + name.slice(0,1).toUpperCase() + name.slice(1,));


//----------------------Lesson 86---------------------------
// Solution to lesson 85


// ----------------------Lesson 87---------------------------
// var dogAge = parseInt(prompt("enter in your Dog Age"));

// var humanAge = (dogAge - 2) * 4 + 21;
// alert("Your dog Age would be " + humanAge + " In Human Age");

// ----------------------Lesson 88---------------------------
// Deticated quiz attached

// ----------------------Lesson 94---------------------------
// function lifeInWeeks(age) {
    
// /************Don't change the code above************/    
    
    
//     //Write your code here.
    
//     var remainingAge = 90 - age;
//     var months = remainingAge*12;
//     var weeks = remainingAge*52;
//     var days = remainingAge*365;
    
//     console.log("You have "+ days.toString() +" days, " + weeks.toString() + " weeks, and " + months.toString() + " months left.");
    
    
    
    
// /*************Don't change the code below**********/
// }


// ----------------------Lesson 96---------------------------


// function bmiCalculator(weight, height){
//     return Math.floor(weight/ Math.pow(height ,2));
// }

// var bmi = bmiCalculator(65, 1.8); 


// ----------------------Lesson 99---------------------------
// Love Calculator
// function loveCalculator(name1, name2){
//     var loveChance = Math.random();
//     loveChance = Math.floor(loveChance*100) + 1;
    
//     alert("The Chance Of Love between " + name1+ " and " +name2+ " is %" +loveChance);
// }

// loveCalculator(prompt("Enter Name 1"), prompt("Enter Name 2"));

// ----------------------Lesson 102---------------------------

// And(&&) Or(||) Not(!)

// function bmiCalculator (weight, height) {
//     var BMI = Math.floor(weight/ Math.pow(height ,2));
    
//     if(BMI >24.9){
//         return "Your BMI is " +BMI+ ", so you are overweight.";
//     }
//     if(BMI <= 24.9 && BMI >= 18.5){
//         return "Your BMI is " +BMI+ ", so you have a normal weight.";
//     }
//     if(BMI < 18.5){
//         return "Your BMI is " +BMI+ ", so you are underweight."
//     }
// }

// ----------------------Lesson 103---------------------------

// function isLeap(year) {
    
// /**************Don't change the code above****************/    
    
//     //Write your code here.    
//     var leapYearValidation = false;
    
//     if (((year/4) % 2) === 1){
//         leapYearValidation = true;
        
//         if((year/100)%2 === 1){
//             leapYearValidation = false;
            
//             if((year/400)%2 === 1){
//                 leapYearValidation = true;
//             }
//         }
//     }
    
//     if (leapYearValidation === true){
//         return "Leap year."
//     }
    
//     if (leapYearValidation === false){
//         return "Not leap year."
//     }
// /**************Don't change the code below****************/    

// }




// ----------------------Lesson 106---------------------------

// function whosPaying(names) {
    
// /******Don't change the code above*******/
    
//     //Write your code here.
//     var randomValue = Math.random() * names.length;
//     randomValue = Math.floor(randomValue) 
    
//     return names[randomValue] + " is going to buy lunch today!"


// /******Don't change the code below*******/    
// }
