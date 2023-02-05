const bgList = ["Tate/1.jpg", "Tate/2.avif", "Tate/3.jpg", "Tate/4.avif",
"Tate/5.webp", "Tate/6.jpg", "Tate/7.jpg",
"Tate/8.jpg", "Tate/9.jpg", "Tate/10.jpg", "Tate/11.jpeg"];

const chosenBg = bgList[Math.floor(Math.random() * bgList.length)];

function changeBg() {
    let chosenBg = bgList[Math.floor(Math.random() * bgList.length)];
    document.querySelector("body").style.backgroundImage = `url(${[chosenBg]})`;
}
changeBg()