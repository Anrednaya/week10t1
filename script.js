const prevPic = () => {
  let image = document.getElementById("image");
  image.src = "./images/first-picture.jpg";
}

const nextPic = () => {
  let image = document.getElementById("image");
  image.src = "./images/second-picture.jpg";
}

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.onclick = prevPic;
nextButton.onclick = nextPic;