let score = prompt("Enter your score"); //ask the user to input their score
score = parseInt(score); //convert input into an integer

if (score >= 90){ //if the score is 90 or more
    console.log("Your grade is: Excellent") //show Excellent grade
} else if (score >= 80) { //if the score is between 80-89
    console.log("Your grade is: Good") //show Good grade
} else if (score >= 70) { //if the score is between 70-79
    console.log("Your grade is: Fair") //show Fair grade
} else { //if the score is below 70
    console.log("Your grade is : Needs Improvement"); //show Needs Improvement gade
}