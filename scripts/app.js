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
  console.log(phrases[i]);

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
const scrollTop = $(window).scrollTop();
//----------- Button transition ----------- WIP