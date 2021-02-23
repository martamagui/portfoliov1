/**
 * @author Marta Molina Aguilera (Está en inglés porque supongo que si uso esto para buscar trabajo lo van a mirar por dentro.)
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
        //It stays, therefore it returns false. It was needed to add the textDisplay.innerHTML in this condition in order to show the las "!" and the final push
        currentPhrase.push(" :)");
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
//----------- Button transition ----------- WIP