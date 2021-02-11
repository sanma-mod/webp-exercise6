const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const photos = [`pic1.jpg`, `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
/* Looping through images */
for (let i = 0; i < photos.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${photos[i]}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener(`click`, changePhoto);
}

function changePhoto(e) {
  displayedImage.src = e.target.src;
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener(`click`,btnClick);


function btnClick() {
  let buttonClass = btn.getAttribute(`class`);
  if (buttonClass === `dark`) {
    btn.setAttribute(`class`, `light`);
    btn.textContent = `Lighten`;
    overlay.style.backgroundColor = `rgba(0,0,0,0.5)`;
  } else {
    btn.setAttribute(`class`, `dark`);
    btn.textContent = `Darken`;
    overlay.style.backgroundColor = `rgba(0,0,0,0)`;
  }
}
//btn.addEventListener();
