//Keysound pelo clique
document.querySelectorAll("button").forEach(function (botao) {
    botao.addEventListener("click", function () {
        getKeySound(this.innerHTML);
    });
});

//Keysound pelo teclado
document.addEventListener("keydown", function (event) {
    getKeySound(event.key);
});

//Lógica para Keysound
function getKeySound(botao) {
    let audio;

    switch (botao) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
    }

    if (audio != undefined) {
        audio.play();
    }
}
