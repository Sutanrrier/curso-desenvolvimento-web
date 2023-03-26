const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let playerPattern = [];
let nivel = 0;
let gameStarted = false;

$(document).on("keypress", function () {
    if (gameStarted === false) {
        startNewGame();
    }
})

//Lógica do jogador ao clicar em um botão
$(".btn").on("click", function () {
    if (gameStarted) {
        const playerChosenColor = this.id;

        playerPattern.push(playerChosenColor);
        playButtonSound(playerChosenColor);
        playButtonAnimation(playerChosenColor);
        checkAnswer();
    }

});

//Seleciona uma nova cor de forma aleatória e adiciona ao gamePattern atual
function nextSequence() {
    const randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];

    nivel++;
    $("#level-title").text("Nivel " + nivel);

    gamePattern.push(randomChosenColor);
    playButtonSound(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
}

//Checa se a cor escolhida está dentro do gamePattern
function checkAnswer() {
    const currentPosition = playerPattern.length - 1;

    if (playerPattern[currentPosition] === gamePattern[currentPosition]) {
        if (currentPosition === nivel - 1) {
            setTimeout(() => {
                playerPattern = [];
                nextSequence()
            }, 1000);
        }
    }
    else {
        endGame();
    }
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
    }, 100);
}

//Finaliza o jogo atual
function endGame() {
    $("body").addClass("game-over");
    $("#level-title").text("Você perdeu! Aperte uma tecla para reiniciar");
    gameStarted = false;

    const audio = new Audio("./sounds/wrong.mp3");
    audio.play();

    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
}

//Inicia um novo jogo
function startNewGame() {
    gameStarted = true;
    nivel = 0;
    gamePattern = [];
    playerPattern = [];
    nextSequence();
}
