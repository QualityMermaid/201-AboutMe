alert("Hi, my name is Jessica, Welcome to my site!")
let user = yourName();
let points = 0;
let wrongPoints = 0;
let skippedQuestion = 0;
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
            skippedQuestion = skippedQuestion + 1
            console.log("Currenlt no. of skipped questions " + skippedQuestion)
            return
        } else {
            console.log(userAnswer)
            userAnswer = userAnswer.toLowerCase()
        }
    
        if((userAnswer === "y" || userAnswer === "yes") && answer === "y" ){
            console.log("Correct answer1")
            alert(messageCorrect)
            points = points+1
            console.log("current points are "+ points + "wrong points " + wrongPoints)
        } else if((userAnswer === "n" || userAnswer === "no") && answer === "n" ){
            console.log("Correct answer2")
            alert(messageCorrect)
            points = points+1
            console.log("current points are "+ points + "wrong points " + wrongPoints)
        } else if((userAnswer === "y" || userAnswer === "yes") && answer === "n" ){
            console.log("Sorry not right1")
            alert(messageWrong)
            wrongPoints = wrongPoints+1
            console.log("current points are "+ points + "wrong points " + wrongPoints)
        }  else if((userAnswer === "n" || userAnswer === "no") && answer === "y" ){
            console.log("Sorry not right2")
            alert(messageWrong)
            wrongPoints = wrongPoints+1
            console.log("current points are "+ points + "wrong points " + wrongPoints)
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
}

function testQuizFinished(){
    alert("Thank you " + user + " for taking part of my quiz. You have answer " + points + " questions correctly! You also skipped " + skippedQuestion + ".")
}
