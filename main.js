alert("Hi, my name is Jessica, Welcome to my site!")
let user = yourName();
console.log(user)

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

        testQuiz("Is my husband's name Nick?", "y", "Correct "+ user )
        testQuiz("Is my dad called Nick?", "y", "Yes his name is also Nick. Well done "+ user )
        testQuiz("Do I have a BA in Fine Arts?", "n", "Correct "+ user + ", I have a BA in Digital Animation" )
        testQuiz("Am I a Divemaster?", "n", "Good spot "+ user + ". I am a Master Scuba Diver not Divermaster")
        testQuiz("Test/Quality Engineers break code?", "n", "Correct "+user+". Testing doesn't break code. It just shows you it's broken!")
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
function testQuiz(question, answer, message){
    let userAnswer
    while(userAnswer != "yes" && userAnswer != "no" && userAnswer != "n" && userAnswer != "y"){
        console.log(userAnswer);
        userAnswer = prompt(question);
        if(userAnswer == null){
            console.log(userAnswer)
            alert("OK fine don't answer this question?")
            return
        } else {
            console.log(userAnswer)
            userAnswer = userAnswer.toLowerCase()
        }
    
            if((userAnswer === "y" || userAnswer === "yes") && answer === "y" ){
                console.log("Correct his name is Nick")
                alert(message)
        } else if ((userAnswer === "no" || userAnswer === "n") && answer === "n"){ 
            console.log("Not write answer") ;
            alert(message)
        } else if(userAnswer != "yes" && userAnswer != "no" && userAnswer != "n" && userAnswer != "y"){
            console.log(userAnswer)
            alert("Please check you input is in y/n yes/no format.")
        } else if (userAnswer == null){
            console.log(userAnswer)
            alert("OK " + user + " hope you will come back later.")
        }
        else {
            alert("Sorry " + user + " that's not the right answer.");
            console.log("Why are you not working")
        }
    }
}

function testQuizFinished(){
    alert("Thank you " + user + " for taking part of my quiz.")
}
