const texts = ["Rick & Morty", "desarrollado con... ", "HTML", "CSS", "JavaScript", "React", " y Vite."];
const fixedText = "Proyecto Integrador";
const fixedTextElement = document.querySelector(".fixedText");
const changingTextElement = document.querySelector(".changingText");
let textIndex = 0;
let charIndex = 0;

// Escribe el texto fijo inicial
fixedTextElement.textContent = fixedText;

function type() {
  if (charIndex < texts[textIndex].length) {
    changingTextElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 600);
  }
}

function erase() {
  if (charIndex > 0) {
    changingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 600);
  }
}

type();


