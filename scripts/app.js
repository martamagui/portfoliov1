/**
 * @author Marta Molina Aguilera 
 */

//-----------Home Page-----------
const phrases = [" a Junior Developer!", " a cat mom!", " Marta!"];
const textDisplay = document.getElementById("Greeting");
let i = 0;
let j = 0;
let currentPhrase = ["Hi!<br>It's me,"];
let deleteLettter = false;
let typingSpeed = 0;
let delTyping = 0;

function loop() {

  textDisplay.innerHTML = currentPhrase.join("");
  delTyping = deleteLettter ? 100 : 300;
  typingSpeed = Math.random() * (100 - 50) + delTyping;
  /*console.log(phrases[i]);*/

    if (!deleteLettter && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      //console.log(`add letter`, j);
      ++j;
    } else {
      currentPhrase.pop(phrases[i][j]);
      --j;
      //console.log(`del. letter`, j);
    }
    if (j == phrases[i].length) {
      if (i == phrases.length - 1) {
        //Ya se queda, así que retorna fasse. Hay que añadir el textDisplay.innerHTML para que se muestren la exclamación y el :) 
        textDisplay.innerHTML = currentPhrase.join("");
        return false;
      }
      typingSpeed = 600;
      deleteLettter = true;
    }
    if (deleteLettter && j == 0) {
      currentPhrase = ["Hi!<br>It's me, "];
      deleteLettter = false;
      i++;
    }
    setTimeout(loop, typingSpeed);
}
loop();
//----------- Nav transparent to dark--------WIP
//const scrollTop = $(window).scrollTop();
//----------- Button transition ----------- WIP

//----------- Languajes bars--------------- WIP
let percentageBar = [25,80,65,18,40];
let actualPercentageBar = [0,0,0,0,0];
let barsIds = [`JavaBar`,`HTMLBar`,`CSSBar`,`JSBar`,`MYSQLBar`];
let actualIndex = 0;
let time=0;
let valuePlsIncrementJava=0;
let k=0;
let l=0;
let ejecutar= false;

window.addEventListener('scroll', ()=>{
  const scrllableY = document.documentElement.scrollHeight-window.innerHeight;
  const scrolleado =  window.scrollY;
  console.log(scrllableY + " " +scrolleado);
  let learningDivH = Math.round(scrllableY/3.5);
  console.log(learningDivH);
  if((scrolleado>=learningDivH)&&(ejecutar==false)){
    barWidthFill();
    ejecutar=true;
  }
});

function barWidthFill(){
  console.log("hola");
  let parent = document.getElementById(barsIds[k]);
  //let actualIndex = (barsIds.indexOf(parent));
  time = Math.random() * (10);
  if((actualPercentageBar[k]<percentageBar[k])&&(k<5)){
    ++actualPercentageBar[k];
    //console.log(valuePlsIncrementJava);
    parent.style.width = `${actualPercentageBar[k]}%`;
  }else if(actualPercentageBar[k]==percentageBar[k]){
    parent.setAttribute("class", "progress-bar");
    ++k
  }setTimeout(barWidthJava, time);
  
}
