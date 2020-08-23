//question 1
const button1 = document.querySelector("#bg");
const body = document.querySelector("body");

function newColor() {
  body.style.backgroundColor = "green";
}

button1.addEventListener("click", newColor);

// question 2
const button = document.querySelector(".toggler");
const togglee = document.querySelector(".togglee");

button.onclick = function () {
  togglee.classList.toggle("extra");
};

// question 3
const dropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");
dropdown.onchange = function () {
  console.log(event.target.value);

  const selectedValue = this.value;
  paragraphsContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    paragraphsContainer.innerHTML += `<p class="content"> ${i}</p>`;
  }
};

// question 4
const word = document.querySelector(".input");
const characterCount = document.querySelector(".char-count b");

word.onkeyup = function () {
  const len = event.target.value.length;
  characterCount.innerHTML = len;
};

// question 5
// question for teacher: How would I go about to make it so that if I have pressed button to make bg color green, when scrolling down it changes to yellow?
// tried using event.stopPropagation(); but no result.
function pageScroll() {
  const scrolled = window.scrollY;
  if (scrolled > 35) {
    document.body.classList.add("highlight");
  } else {
    document.body.classList.remove("highlight");
  }
}

window.onscroll = pageScroll;
