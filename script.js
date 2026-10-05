
let humanscore=0;
let computerscore=0;
playgame();
function getComputerChoice() {

    let random = Math.floor(3 * (Math.random()));

    if (random == 0)
        return("rock");
    else if (random == 1)
        return("paper");
    else if (random == 2)
        return("scissors");
}
function getHumanChoice() {

    let humanchoice = prompt(" ha ha ha you puny little human want to play with me !!! you are pathetic!! give me a value between ROCK PAPER or SCISSORS dundlehead");
        humanchoice=humanchoice.toLowerCase();
    if (humanchoice != "rock" && humanchoice != "paper" && humanchoice != "scissors") {
        alert(" are u kidding me!!!? Do you even know englishhh fool!! go and learn english and then come to play...huh wasted my time.")
    }

else return humanchoice;

}
function playgame(){

    function playround(){
        let humanchoice=getHumanChoice();
        let computerchoice=getComputerChoice();
    
        if(humanchoice==computerchoice){
            console.log(" ha ha ha it's drawww.i am just warming up with u fool");

            humanscore++;
            computerscore++;
        }
          else if(humanchoice=="paper" && computerchoice=="rock"|| humanchoice=="rock" && computerchoice=="scissors"|| humanchoice=="scissors" && computerchoice=="paper")
            {
                console.log(` ohh so you chose ${humanchoice} this time and beat my ${computerchoice}. dont get carried away fool iam just warming up`);
               humanscore++;     
          }
          else{
            console.log(`hahahahahaha what happened punny human ! your ${humanchoice} lost to my ${computerchoice}`);
            computerscore++;
          }
    }
    let n= Number(prompt(" enter howmany rounds you want to play"));
    for(let i=0;i<n;i++){
       
        playround();
    }

if(humanscore==computerscore)
    console.log(`both of us at score ${computerscore} .its only because i took u lightly!`)
else if(humanscore>computerscore){  console.log(`computer :${computerscore}  punyhuman:${humanscore}. dont get carried outtttt i just gave u a chance to win `)}
else{console.log(`computer:${computerscore} human:${humanscore} . did u seeee our levels!!!!! u are nothing compared to me!!`);}
}