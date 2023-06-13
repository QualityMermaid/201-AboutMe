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
    console.log(user)

}

function guessGame(){
    console.log(user)
}