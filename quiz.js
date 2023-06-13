let colour;
    let colourDone = 0;

        function favColour(){
                    
            while(colour != "blue"){
            colour = prompt(user + ", can you guess my fav colour?").toLowerCase()
                
            if (colour == "green"){
                alert("Almost " + user + " Green is my second fav colour. Try again for my fav!")
            } else if (colour != "blue"){
                alert("Sorry " + user +" that's incorrect. Try again!")
            }
            else { alert("That's correct! Blue is my fav colour"); colourDone = 1
                    }}
                    console.log(colourDone)
                }
                console.log("user guess", colour)
                console.log(colourDone)


        let catname;
        let catDone = 0;

        function myCatName(){
            console.log(catname)        
            while(catname != "bugsy"){
            catname = prompt(user + ", can you guess the name of my cat?").toLowerCase()
                
            if (catname != "bugsy"){
                alert("Sorry " + user +" that's incorrect.")
            } else { alert("That's correct. Bugsy says hello!"); catDone = 1}
                    }
                }
                console.log("user guess", catname)
                console.log(catDone)



        let myloc;
        let locDone = 0;

        function myLocation(){
                    
            while(myloc != "cambridge"){
            myloc = prompt(user + ", can you guess where I live?").toLowerCase()
                
            if (myloc != "cambridge"){
                prompt("Sorry " + user +" that's incorrect")
            } else { alert("That's correct."); locDone = 1}
                    }
                }
                console.log("user guess", myloc)
                console.log(locDone)


        let game;
        let gameDone = 0;

        function myGame(){
                    
            while(game != "zelda"){
            game = prompt(user + ", can you guess my current game?").toLowerCase()
                
            if (game != "zelda"){
                prompt("Sorry " + user +" that's incorrect. Try main game title eg. Zelda instead of Zelda: breath of the wild")
            } else { alert("That's correct"); gameDone = 1}
                    }
                    console.log("user guess", game)
                    console.log(gameDone)
                }

        // let allDone = colourDone+catDone+locDone+gameDone
        // console.log(allDone)

        function finished(){
            let allDone = colourDone+catDone+locDone+gameDone
            console.log(allDone)
            if(allDone <= 3) {
                alert("Sorry " + user + " you have not gotten it all right yet.")
            } else if (allDone == 4){
                alert("Congratulations!!!!!")
            } else return
            console.log("Are all quizes correct?", allDone)
        }
