
let humanscore=0;
let computerscore=0;

function getComputerChoice() {

    let random = Math.floor(3 * (Math.random()));

    if (random == 0)
        return("rock");
    else if (random == 1)
        return("paper");
    else if (random == 2)
        return("scissors");
}





    function playround(event){
        if (event.target.tagName !== 'BUTTON') return;
        let humanchoice=event.target.textContent.toLowerCase();
        let computerchoice=getComputerChoice();
    
        if(humanchoice==computerchoice){
            console.log(" ha ha ha it's drawww.i am just warming up with u fool");

          
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
          const hchoice=document.querySelector(".humchoice");
          const cchoice=document.querySelector(".compchoice");
              hchoice.textContent="punyhuman's pathetic choice:".toUpperCase()+humanchoice.toUpperCase();
              cchoice.textContent="Mighty computer san's choice :".toUpperCase()+computerchoice.toUpperCase();

          const human=document.querySelector(".human");
          const comp=document.querySelector(".comp");
          human.textContent=humanscore;
          comp.textContent=computerscore;
          CheckGameOver()

          
    }
    
function CheckGameOver(){
if(humanscore==5||computerscore==5){
    let winner;
    if(humanscore==5)
         winner="PATHETIC PUNY HUMAN";
     else winner="MIGHTY COMPUTER SAN"    
      win=document.querySelector(".winner");
      win.textContent="WINNER IS : "+winner;

      humanscore=0;
      computerscore=0;
      setTimeout(() => {
            alert("GAME OVER! Winner: " + winner);
            location.reload(); // Refreshes the page back to factory settings
        }, 50);
}
    
}


const button=document.querySelector(".buttons");
  button.addEventListener("click",playround);