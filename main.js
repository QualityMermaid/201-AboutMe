alert("Hi, my name is Jessica, Welcome to my site!")
let user = yourName();
let pointsYN = 0;
let pointsNum = 0;
let totalPoints = 0;
let wrongPoints = 0;
let skippedQuestionYN = 0;
let skippedQuestionNum = 0;
let skippedQuestions = 0;
console.log("users name =" + user)

function yourName(){
    let user
    console.log("sraet" + user)
    while (!user){
        user = prompt("Please give me a name to call you.")
        if (user === "Chris" || user === "chris"){
            alert("Hello " + user + " enjoy the fonts.")
            console.log(user)
        } else if(user){
            console.log("user set to " + user)
            alert("Welcome to my page " + user)
        } else (
            console.log(user)
        )
    }
    console.log("User ='" + user+ "'")
    return user
}

let ready = false 
function guessGame(){
    console.log(user)
    const response = confirm("Are you ready " + user + "?")
    console.log(response)
    if (response){
        alert("OK lets start!");
        console.log("Ready to do this")
        ready = true
        alert("Please only answer in yes/no or y/n ")

        testQuiz("Is my husband's name Nick?", "y", "n", "Correct "+ user, "Sorry that's incorrect " + user )
        testQuiz("Is my dad called Nick?", "y", "n", "Yes his name is also Nick. Well done "+ user , "Sorry that's incorrect " + user )
        testQuiz("Do I have a BA in Fine Arts?", "n", "y", "Correct "+ user + ", I have a BA in Digital Animation", "Sorry that's incorrect " + user  )
        testQuiz("Am I a Divemaster?", "n", "y", "Good spot "+ user + ". I am a Master Scuba Diver not Divermaster", "Sorry that's incorrect " + user )
        testQuiz("Test/Quality Engineers break code?", "n", "y", "Correct "+user+". Testing doesn't break code. It just shows you it's broken!", "Sorry that's incorrect " + user )
        randomNumber()
        pointsNum
        pointsYN
        totalPoints = pointsNum + pointsYN
        skippedQuestionNum
        skippedQuestionYN
        skippedQuestions = skippedQuestionNum + skippedQuestionYN
        testQuizFinished()
        
    if(ready === true){
        console.log("Here we go its working")
    }
    else {alert("something isnt right")}
    return ready=true;}
        else { alert("Come back when your ready.");
        console.log("notready")
        return ready=false
        }
    }

// // testQuiz("What is the date", "y", "Correct "+ user )
function testQuiz(question, answer, wrongAnswer, messageCorrect, messageWrong){
    let userAnswer
    while(userAnswer != "yes" && userAnswer != "no" && userAnswer != "n" && userAnswer != "y"){
        console.log("This is an answer?" + userAnswer);
        userAnswer = prompt(question);
        if(userAnswer == null){
            console.log(userAnswer)
            alert("OK fine don't answer this question?")
            skippedQuestionYN = skippedQuestionYN + 1
            console.log("Currenlt no. of skipped questions " + skippedQuestionYN)
            return
        } else {
            console.log(userAnswer)
            userAnswer = userAnswer.toLowerCase()
        }
    
        if((userAnswer === "y" || userAnswer === "yes") && answer === "y" ){
            console.log("Correct answer1")
            alert(messageCorrect)
            pointsYN = pointsYN+1
            console.log("current points are "+ pointsYN + "wrong points " + wrongPoints)
        } else if((userAnswer === "n" || userAnswer === "no") && answer === "n" ){
            console.log("Correct answer2")
            alert(messageCorrect)
            pointsYN = pointsYN+1
            console.log("current points are "+ pointsYN + "wrong points " + wrongPoints)
        } else if((userAnswer === "y" || userAnswer === "yes") && answer === "n" ){
            console.log("Sorry not right1")
            alert(messageWrong)
            wrongPoints = wrongPoints+1
            console.log("current points are "+ pointsYN + "wrong points " + wrongPoints)
        }  else if((userAnswer === "n" || userAnswer === "no") && answer === "y" ){
            console.log("Sorry not right2")
            alert(messageWrong)
            wrongPoints = wrongPoints+1
            console.log("current points are "+ pointsYN + "wrong points " + wrongPoints)
        } else if(userAnswer != "yes" && userAnswer != "no" && userAnswer != "n" && userAnswer != "y"){
            console.log(userAnswer)
            alert("Please check you input is in y/n yes/no format.")
        } else if (userAnswer == null){
            console.log(userAnswer)
            alert("OK " + user + " hope you will come back later.")
        }
        else {
            alert("Sorry " + user + " something went wrong. Try again");

            console.log("Why are you not working")
        }
    }
    console.log("End y/n")
    // randomNumber()
}
    let num = Math.floor(Math.random() * 10) + 1;
    let turns = 4;
    
    function randomNumber() {
    while (turns > 0) {
        guess=prompt("Try and guess a random number!!!");
            if(guess == null){
                console.log(guess)
                alert("OK fine don't answer this question?")
                skippedQuestionNum = skippedQuestionNum + 1
                console.log("Currenlt no. of skipped questions " + skippedQuestionNum)
                return
            } else if (guess == num) {
                pointsNum = pointsNum + 1;
                alert("Congratulations " + user + ", you won! The mystery number was " + num + ".");
                console.log(guess)
                console.log(num)
                console.log(pointsNum)
                return;
            } else if (guess < num) {
                turns--;
                alert("Your guess was too low. Turns remaining: " + turns);
            } else if (guess > num) {
                turns--;
                alert("Your guess was too high. Turns remaining: " + turns);
            }
    }
    if (turns==0)
    alert ("Sorry " + user + " you failed to guess correctly. The correct numer was " + num);
    turns = 4
    // testQuizFinished()

    }
    
    
    function testQuizFinished(){
        alert("Thank you " + user + " for taking part of my quiz. You have answered " + totalPoints + " questions correctly! You also skipped " + skippedQuestions + ".")
    }
    
    
    


// DO NOT USE THIS ONE IT DOESNT WORK!!!!
// function testQuizNumer(){
//     let numberGuessed
//     while(numberGuessed != 7){
//         console.log("This is the number guessed " + numberGuessed);
//         numberGuessed = prompt("Can you guess my lucky number? Hint: between 1 and 10");
//         if(numberGuessed == null){
//             console.log("num is null" + numberGuessed)
//             alert("OK fine don't answer this question?")
//             skippedQuestion = skippedQuestion + 1
//             console.log("Currenlt no. of skipped questions " + skippedQuestion)
//             return
//         } else 
//         // {
//             // numberGuessed = numberGuessed
//             // console.log("Number its null")
//         // } 
//         for (let i = 4; numberGuessed; i--){
//             // numberGuessed = prompt("Can you guess my lucky number? Hint: between 1 and 10")
//             if (!numberGuessed){
//                 alert("Please give me a valid input between 1 and 10!!!")
//                 console.log("not valid")
//                 // numberGuessed = prompt("Can you guess my lucky number? Hint: between 1 and 10")
//             }else if(isNaN(numberGuessed)){
//                 alert("Please give my a valid input between 1 and 10")
//                 console.log("User guessed new number " + numberGuessed)
//                 // numberGuessed = prompt("Can you guess my lucky number? Hint: between 1 and 10")
//             }else if(numberGuessed == 7){
//                 alert("Correct " + user +" "+ numberGuessed + " is my lucky number!")
//                 points = points + 1
//                 return
//             } else if(numberGuessed <= 6){
//                 alert("Sorry that number is too low. Try a higher one.")
//                 console.log("too low" + numberGuessed)
//                 // numberGuessed = prompt("Please try a higher number")
//                 console.log("new number" + numberGuessed)
//             } else if(numberGuessed >=8){
//                 console.log("too high" + numberGuessed)
//                 alert("Sorry that number is too high. Try a lower one.")
//                 // numberGuessed = prompt("Please enter a lower number")
//                 console.log("newNumer" + numberGuessed)
//             } else if(numberGuessed <+0 || numberGuessed >=11){
//                 console.log("not within 1-10" + numberGuessed)
//                 alert("Please guess between 1 and 10")
//                 // numberGuessed = prompt("Please enter a lower number")
//                 console.log("newNumer" + numberGuessed)
//             }
//         }
//     }
// }
    

// let num = Math.floor(Math.random() * 10) + 1;
// let turns = 4;

// function randomNumber() {
// while (turns > 0) {
//     guess=prompt("Try and guess a random number!!!");
//         if (guess == num) {
//             points = points = 1;
//             alert("Congratulations " + user + ", you won! The mystery number was " + num + ".");
//             console.log(guess)
//             console.log(num)
//             console.log(points)
//             return;
//         } else if (guess < num) {
//             turns--;
//             alert("Your guess was too low. Turns remaining: " + turns);
//         } else if (guess > num) {
//             turns--;
//             alert("Your guess was too high. Turns remaining: " + turns);
//         }
// }
// if (turns==0)
// alert ("Sorry " + user + " you failed to guess correctly. The correct numer was " + num);
// turns = 4
// }


// function testQuizFinished(){
//     alert("Thank you " + user + " for taking part of my quiz. You have answer " + points + " questions correctly! You also skipped " + skippedQuestion + ".")
// }

