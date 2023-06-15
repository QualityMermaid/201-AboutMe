alert("Hi, my name is Jessica, Welcome to my site!")
const user = yourName(); // maybe change to const
let pointsYN = 0;
let pointsNum = 0;
let points10 = 0
let pointsCity = 0
let totalPoints = 0;
let wrongPoints = 0;
let wrongNum = 0;
let wrong10 = 0;
let wrongCity = 0;
let totalWrong = 0;
let skippedQuestionYN = 0;
let skippedQuestionNum = 0;
let skippedQuestion10 = 0;
let skippedCity = 0;
let skippedQuestions = 0;
const top10Drinks = ["pepsimax", "strawberry daiquiri", "lemonade","appletiser", "mixed fruit cider","mojito","elderflower collins","lychee gimlet","gin and lemonade","applejuice"]

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
        alert("For these questions please only answer in yes/no or y/n ")

        testQuiz("Is my husband's name Nick?", "y", "Correct "+ user, "Sorry that's incorrect " + user )
        testQuiz("Is my dad called Nick?", "y", "Yes his name is also Nick. Well done "+ user , "Sorry that's incorrect " + user )
        testQuiz("Do I have a BA in Fine Arts?", "n", "Correct "+ user + ", I have a BA in Digital Animation", "Sorry that's incorrect " + user  )
        testQuiz("Am I a Divemaster?", "n", "Good spot "+ user + ". I am a Master Scuba Diver not Divermaster", "Sorry that's incorrect " + user )
        testQuiz("Test/Quality Engineers break code?", "n", "Correct "+user+". Testing doesn't break code. It just shows you it's broken!", "Sorry that's incorrect " + user )
        randomNumber()
        top10Quiz()
        pointsNum
        pointsYN
        points10
        pointsCity
        totalPoints = (points10 + pointsNum) + (pointsYN + pointsCity)
        wrongPoints
        wrongNum
        wrong10
        wrongCity
        totalWrong = (wrong10 + wrongNum) + (wrongPoints + wrongCity)
        skippedQuestionNum
        skippedQuestionYN
        skippedQuestion10
        skippedCity
        skippedQuestions = (skippedQuestion10 + skippedQuestionNum) + (skippedQuestionYN + skippedCity)
        city()
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
function testQuiz(question, answer, messageCorrect, messageWrong){
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

let num;
let turns;
    
function randomNumber() {
    num = Math.floor(Math.random() * 100) + 1;
    turns = 4;
    while (turns > 0) {
        guess=prompt("For this question try and guess a random number up to 100!!!");
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
    } if (turns==0)
        alert ("Sorry " + user + " you failed to guess correctly. The correct numer was " + num);
        wrongNum = wrongNum +1
        console.log("you got it wrong " + wrongNum)
        turns = 4
        num = Math.floor(Math.random() * 100) + 1;
}

function city(){
const location = ["cambridge", "falmouth"]
let turnYouHaveLeft = 6;
let winnerWinner
let city 

    for(let i = 6; i > 0; i--){
        // winnerWinner = false
        // console.log("for loop 1 " + winnerWinner)
        
        turnYouHaveLeft = i - 1
        // let city = prompt("Where have I lived")
        console.log("log1")
        // city = city.toLowerCase()
        console.log("log2")

    // }

        for(let j = 0; j < location.length; j++ ){
            city = prompt("Where have I lived")
            // city = city.toLowerCase()
            if(city == null){
                console.log("city question cancled")
                alert("OK fine don't answer this question?")
                skippedCity = skippedCity + 1
                console.log("Currenlt no. of skipped questions " + skippedCity)
                return
            } else {
                console.log("user skipped this as well")
                city = city.toLowerCase()
            }
            if(location[j] === city){
                console.log("log3")
                alert("Well done " + user + ". I have lived in  " + city + ". You managed to guess right with " + turnYouHaveLeft + " turns left!")
                console.log("log3")
                winnerWinner = true
                console.log(pointsCity)
                pointsCity = pointsCity + 1
                break
            } else if(!city || city == " "){
                alert("Please guess a place I have lived")
                // city = prompt("Hi. Can you guess where have I lived?")
                break
            } else (location[j] != city )
            {
                console.log("wrong answer")
                // turnYouHaveLeft--
                alert("Sorry " + user + ' I have not lived at ' + city + ". You have " + turnYouHaveLeft + " turns left.")
                wrongCity = wrongCity + 1
                // city = prompt("Hi. Can you guess where have I lived?")
                break
            }
        }if(winnerWinner == true){
            break
        }else if (i == 0){
            alert("Sorry " + user + " you didn't guess anywhere correctly and have used all your guesses. Try again later")
        }else if (!city && i > 0){
            turnYouHaveLeft++
            i++
            // city = prompt("Hi. Can you guess where have I lived?")
        } else if (city == null){
            // skippedCity = skippedCity
            break
        }
    }
}
    // if(winnerWinner == true){
        // pointsCity++
    // } 






    
let turnsLeft = 6;
function top10Quiz(){
    console.log(top10Drinks[0]);
    console.log(top10Drinks[1]);
    console.log(top10Drinks[2]);
    console.log(top10Drinks.length);
    console.log(top10Drinks);
    while (turnsLeft > 0) {
        guess=prompt("What is one of my top 10 Drinks?");
        // guess == guess.toLowerCase
        if(guess == null){
            console.log(guess + "its null folks")
            alert("OK no more guessing?")
            skippedQuestion10 = skippedQuestion10 + 1
            console.log("Current no. of skipped questions " + skippedQuestion10)
            return
        } else if (top10Drinks.includes(guess.toLowerCase())){
            turnsLeft--
            alert ("Correct! " + guess + " is one of my top 10. Can you guess another? You have " + turnsLeft + " more turns.")
                console.log(guess + "What they guessed")
                points10 = points10 + 1
                console.log("total drinks points " + points10)
            } else if (turnsLeft != 1){
                turnsLeft--
                alert ("Sorry that isn't in my top 10. Try again you have " + turnsLeft + " turns left.")
                wrong10 = wrong10 + 1
                console.log("total wrong drinks points " + wrong10)
            } else {
            turnsLeft--
            alert ("Sorry that isn't in my top 10 and you are out of guesses")
            wrong10 = wrong10 + 1
            console.log("total wrong drinks points " + wrong10)
            }
    } if (turnsLeft==0)
        alert ("WOW " + user + " you got " + points10 + " of my top 10 Drinks!");
        console.log("out of guesses")
        turnsLeft = 6
        console.log("points " + points10 + " wrong " + wrong10 + " skipped " + skippedQuestion10)
    }



function testQuizFinished(){
    console.log("Total score correct " + totalPoints + " wrong " + totalWrong + " skipped " + skippedQuestions)
    console.log("YN " + pointsYN + wrongPoints + skippedQuestionYN)
    console.log("Num " + pointsNum + wrongNum + skippedQuestionNum)
    console.log("Top10 " + points10 + wrong10 + skippedQuestion10)
    console.log("City " + pointsCity + wrongCity + skippedCity)
    alert("Thank you " + user + " for taking part of my quiz. You have answered " + totalPoints + " questions correctly! You also skipped " + skippedQuestions + ".")
    pointsYN = 0;
    pointsNum = 0;
    points10 = 0;
    pointsCity = 0;
    totalPoints = 0;
    wrongPoints = 0;
    wrongCity = 0;
    skippedQuestionYN = 0;
    skippedQuestionNum = 0;
    skippedQuestion10 = 0;
    skippedQuestions = 0;
    skippedCity = 0;
}