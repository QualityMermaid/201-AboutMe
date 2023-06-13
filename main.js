alert("Hi, my name is Jessica, Welcome to my site!")
// yourName()
let user = yourName();
console.log(user)

function yourName(){
    let user = prompt("What is your name?")
    console.log(user)
    while (user.length==0){
        user = prompt("Please give me a name to call you.")
    } if (user === "Chris" || user === "chris"){
        alert("Hello " + user + " enjoy the fonts.")
        console.log(user)
    } else {alert("Welcome to my page " + user)}
    return user
    console.log(user)

}
let husbandName
let fatherName
let degreeIn
let hobby
let job
let ready //working
function guessGame(){
    // let husbandName
    // let fatherName
    // let degreeIn
    // let hobby
    // let job
    // let ready

    console.log(user)
    const response = confirm("Are you ready " + user + "?")
    console.log(response)
    if (response){
        alert("OK lets start! Please answer y/yes or n/no");
        console.log("Ready to do this")
    // return ready=true;}
    //     else { alert("Come back when your ready.");
    //     console.log("notready")
    //     return ready=false
    //     }
    // }
// function guessGameAgain(){
    // console.log(ready + "again")
    if(ready === true){
        alert("Here we go!");
    //     // console.log("im ready")
        guessGameAgain();}
    else {alert("something isnt write")}
// }
return ready=true;}
        else { alert("Come back when your ready.");
        console.log("notready")
        return ready=false
        }
    }

    // function guessGameAgain(){
    //     console.log("Did this work?")
    // }





    // } // working to here
// } // working to here
        
        // husbandName = prompt("Is my husband called Nick?").toLowerCase()
        // while(husbandName != "yes" && husbandName != "no" && husbandName != "n" && husbandName != "y"){
        //     alert("Please only answer in yes/no or y/n ");
        //     husbandName = prompt("Is my husband called Nick? Please answer yes/no or y/n only").toLowerCase();
        
        //         if(husbandName === "y" || husbandName === "yes" ){
        //             console.log("Correct his name is Nick")
        //             alert("Thats correct!")
        //     } else if (husbandName === "no" || husbandName === "n"){ 
        //         console.log("Not write answer") ;
        //         alert("Sorry " + user + " that's not the right answer.")
        //     }
        //         else {console.log("Why are you not working")}
        //     }
        // }
        // fatherName = prompt("Is Nick the name of my father?").toLowerCase()
        // while(fatherName != "yes" && fatherName != "no" && fatherName != "n" && fatherName != "y"){
        //     alert("Please only answer in yes/no or y/n ");
        //     fatherName = prompt("Is Nick the name of my father?").toLowerCase();
        
        //         if(fatherName === "y" || fatherName === "yes" ){
        //             console.log("Correct his name is Nick")
        //             alert("Thats correct!")
        //     } else if (fatherName === "no" || fatherName === "n"){ 
        //         console.log("Not write answer") ;
        //         alert("Sorry " + user + " that's not the right answer.")
        //     }

