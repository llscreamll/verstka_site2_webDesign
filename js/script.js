// OUR WORK
document.querySelectorAll(".toggles button").forEach(el => {
    el.onclick = () => {
        let get_id = el.id;
        document.querySelectorAll(".posts div").forEach(el => {
            el.style.display = "block";
            if (get_id == "showall") {
                el.style.display = "block";
            } else if (!el.classList.contains(get_id)) {
                el.style.display = "none";
            }
        })
    }
});

//carusel
let arayImg = []
let carusel = document.querySelector(".caruselWidth");
document.querySelectorAll(".caruselImg").forEach(el => arayImg.push(el.src));
setInterval(() => {
    caryselImgAdd()
}, 6000);
function caryselImgAdd() {
    while (carusel.firstChild) { carusel.removeChild(carusel.firstChild) };
    let blockIMG = arayImg.shift();
    arayImg.push(blockIMG);
    for (let i = 0; i < arayImg.length; i++) {
        carusel.innerHTML += `<img class="caruselImg" src=${arayImg[i]}></img>`
    }
}
caryselImgAdd();
