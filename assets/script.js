const flecheGauche = document.createElement("img");
flecheGauche.src = "./assets/images/arrow_left.png";
flecheGauche.className = "arrow arrow_left";
banner.appendChild(flecheGauche);

const flecheDroite = document.createElement("img");
flecheDroite.src = "./assets/images/arrow_right.png";
flecheDroite.className = "arrow arrow_right";
banner.appendChild(flecheDroite);

const dots = document.createElement("ul");
dots[0] = document.createElement("li");
dots[0].className = "dot dot_selected";
lesDots.appendChild(dots[0]);
let i = 1;
while (i < 4) {
  dots[i] = document.createElement("li");
  dots[i].className = "dot";
  lesDots.appendChild(dots[i]);
  i++;
}

const Image = document.querySelector(".banner-img");

let tagLine = document.querySelector("p");

let currentIndex = 0;

const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const totalslides = slides.length;

flecheDroite.addEventListener("click", () => {
  nextImage();
  console.log("Vous avez cliqué sur la flèche droite");
});

flecheGauche.addEventListener("click", () => {
  previousImage();
  console.log("Vous avez cliqué sur la flèche gauche");
});

// Function to go to next Image

function nextImage() {
  Image.src = slides[currentIndex].image;
  tagLine.innerHTML = slides[currentIndex].tagLine;
  dots[currentIndex].classList.remove("dot_selected");

  if (currentIndex == totalslides - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  dots[currentIndex].classList.add("dot_selected");
  Image.src = slides[currentIndex].image;
  tagLine.innerHTML = slides[currentIndex].tagLine;
}

// Function to go to previous Image

function previousImage() {
  Image.src = slides[totalslides - 1].image;
  tagLine.innerHTML = slides[totalslides - 1].tagLine;
  dots[currentIndex].classList.remove("dot_selected");

  if (currentIndex == 0) {
    currentIndex = totalslides - 1;
  } else {
    currentIndex--;
  }
  Image.src = slides[currentIndex].image;
  tagLine.innerHTML = slides[currentIndex].tagLine;
  dots[currentIndex].classList.add("dot_selected");
}
