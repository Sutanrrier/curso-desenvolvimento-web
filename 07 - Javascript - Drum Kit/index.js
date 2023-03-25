//Keysound pelo clique
document.querySelectorAll("button").forEach(function (botao) {
    botao.addEventListener("click", function () {
        const botao = this.innerHTML.toLowerCase();

        getKeySound(botao);
        buttonAnimation(botao);
    });
});

//Keysound pelo teclado
document.addEventListener("keydown", function (event) {
    const botao = event.key.toLowerCase();

    getKeySound(botao);
    buttonAnimation(botao);
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

//Mudar visual do botão pressionado
function buttonAnimation(botao) {
    document.querySelector("." + botao).classList.add("pressed");

    setTimeout(() => { document.querySelector("." + botao).classList.remove("pressed") }, 100);
}