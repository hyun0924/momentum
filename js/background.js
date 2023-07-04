const backgrounds = ['0.jpg', '1.jpg', '2.jpg'];
const BG_NUM = backgrounds.length;

const chosenBG = parseInt(Math.random() * BG_NUM);

const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenBG}.jpg`;
bgImage.classList.add("background");
document.body.appendChild(bgImage);