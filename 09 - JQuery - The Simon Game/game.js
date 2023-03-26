const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];
const playerPattern = [];
let nivel = 0;


$(document).on("keypress", function () {
    if (nivel === 0) {
        nextSequence();
    }
})

//Lógica do jogador ao clicar em um botão
$(".btn").on("click", function () {
    const playerChosenColor = this.id;

    playerPattern.push(playerChosenColor);
    playButtonSound(playerChosenColor);
    playButtonAnimation(playerChosenColor);
});

//Seleciona uma nova cor de forma aleatória e adiciona ao gamePattern atual
function nextSequence() {
    const randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];

    nivel++;
    $("#level-title").text("Level " + nivel);

    gamePattern.push(randomChosenColor);
    playButtonSound(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
}

//Lógica para o som das teclas
function playButtonSound(cor) {
    let audio;

    switch (cor) {
        case "red":
            audio = new Audio("./sounds/red.mp3");
            break;
        case "blue":
            audio = new Audio("./sounds/blue.mp3");
            break;
        case "green":
            audio = new Audio("./sounds/green.mp3");
            break;
        case "yellow":
            audio = new Audio("./sounds/yellow.mp3");
            break;
    }

    audio.play();
}

//Lógica para a animação das teclas
function playButtonAnimation(cor) {
    $("#" + cor).addClass("pressed");
    setTimeout(() => {
        $("#" + cor).removeClass("pressed");
    }, 100)

}