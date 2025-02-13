const myChoice = document.getElementById("mychoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
let totalScore = document.getElementById("total-score");
let score = {
  bord:0,
  bakht:0,
  mosavi:0
}

function functionMain(userChoice) {
  const computerNumber = Math.floor(Math.random() * 3 + 1);

  if (userChoice === 'sang') {
    if (computerNumber == 1) {
      result.innerText = "مساوی";
    } else if (computerNumber == 2) {
      result.innerText = "باختی";
    } else if (computerNumber == 3) {
      result.innerText = "بردی";
    }
  
    myChoice.src = "./mysrc/1.png";
    computerChoice.src = `./mysrc/${computerNumber}.png`;
    myChoice.style.display = "flex";
    computerChoice.style.display = "flex";
  }
  
  if (userChoice === 'Kaghaz') {
    if (computerNumber == 1) {
      result.innerText= "بردی";
    } else if (computerNumber == 2) {
      result.innerText= "مساوی";
    } else if (computerNumber == 3) {
      result.innerText= "باختی";
    }
  
    myChoice.src="./mysrc/2.png";
    computerChoice.src=`./mysrc/${computerNumber}.png`;
    myChoice.style.display="flex";
    computerChoice.style.display="flex";
  }
  
  if (userChoice === 'Gheichi') {
     if (computerNumber == 1) {
       result.innerText= "باختی";
     } else if (computerNumber == 2) {
       result.innerText= "بردی";
     } else if (computerNumber ==3 ) {
       result.innerText= "مساوی";
     }
     
     myChoice.src="./mysrc/3.png";
     computerChoice.src=`./mysrc/${computerNumber}.png`;
     myChoice.style.display="flex";
     computerChoice.style.display="flex";
  }
  updateScore();

}
function updateScore(){
if(result.innerText=== "بردی"){
  score.bord++;
  }else if(result.innerText=== "باختی"){
    score.bakht++;
  }else if(result.innerText=== "مساوی"){
    score.mosavi++;
  }
  console.log(totalScore);
  totalScore.innerText = `مساوی:${score.mosavi}، برد:${score.bord}، باخت:${score.bakht}`;
}

