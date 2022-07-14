//array of images.
let images = ["img1", "img2", "img3", "img4"];
//array for names.
let names = [
  "Peter Parker",
  "Jesica Mayler",
  "Helena Micallester",
  "Mark john",
];
//array for titles.
let titles = ["WEB DEVELOPER", "WEB DESIGNER", "TESTER", "THE BOSS"];
//array for reviews.
let rev1 = `Im baby meggings twee health goth +1.
 Bicycle rights tumeric chartreuse before
 they sold out chambray pop-up.
 Shaman humblebrag pickled coloring book salvia hoodie,
 cold-pressed four dollar toast everyday carry`;
let rev2 = `Helvetica artisan kinfolk thundercats
 lumbersexual blue bottle. 
 Disrupt glossier gastropub deep v vice 
 franzen hell of brooklyn twee enamel pin fashion axe.
photo booth jean shorts artisan narwhal.`;
let rev3 = `Edison bulb put a bird on it humblebrag, 
marfa pok pok heirloom fashion axe cray stumptown 
venmo actually seitan. VHS farm-to-table schlitz, 
edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`;
let rev4 = `Helvetica artisan kinfolk thundercats
 lumbersexual blue bottle. 
 Disrupt glossieraxe cray stumptown 
venmo actually seitan. VHS farm-to-table schlitz, 
edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`;
let reviews = [rev1, rev2, rev3, rev4];

let image = document.querySelector("#img");
let btn = document.querySelector("button");
let nameParag = document.querySelector("#name");
let parag = document.querySelector("#title");
let review = document.querySelector("#review");
//get the arrows.
let rightArrow = document.querySelector("#arr-2");
let leftArrow = document.querySelector("#arr-1");

let num = 0;

function getNext() {
  let imageChild = document.querySelector("#img img");
  imageChild.remove();
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `/pics/review${num + 1}.jpg`);
  newImage.style.cssText = ` width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index:3`;
  image.appendChild(newImage);
  parag.innerText = `${titles[num]}`;
  nameParag.innerText = `${names[num]}`;
  review.innerText = `${reviews[num]}`;
}
//event on right arrow to get images[i+1]
rightArrow.addEventListener("click", () => {
  num += 1;
  if (num === images.length) {
    num = 0;
  }
  getNext();
});
//event on left arrow to get images[i-1]
leftArrow.addEventListener("click", (e) => {
  num -= 1;
  if (num < 0) {
    num = images.length - 1;
  }
  getNext();
});
//get random number between two integers.
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
btn.addEventListener("click", () => {
  num = getRandomInteger(0, 4);
  getNext();
});
