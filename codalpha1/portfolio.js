// Typing Effect
const texts = ["Pravalika", "a Developer", "a Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1500);
  } else {
    setTimeout(type, 150);
  }
})();

// Project Filter
function filterProjects(type) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (type === "all" || card.dataset.type === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Theme Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Contact Alert
function handleSubmit() {
  alert("Thanks for your message!");
  return false;
}
