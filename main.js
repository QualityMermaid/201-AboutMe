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

function guessGame(){
    let husbandName
    let fatherName
    let degreeIn
    let hobby
    let job

    console.log(user)
    const response = confirm("Are you ready " + user + "?")
    console.log(response)
    if (response){
        alert("OK lets start!");
        while(husbandName != ""){
            husbandName = prompt("Is my husband called Nick?")}
                if(husbandName != "y" || husbandName != "n" ||husbandName != "yes" || husbandName!="no"){
                console.log(husbandName)}
} else {
        alert("Come back when your ready.")
    } }


    
