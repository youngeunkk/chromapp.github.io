const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage); //append는 가장 뒤에, prepend는 가장 위에 오게 함