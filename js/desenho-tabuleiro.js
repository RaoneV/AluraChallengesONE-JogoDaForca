var botaoIniciar = document.querySelector(".iniciar-jogo");
var areaJogo = document.querySelector(".area-de-jogo");

botaoIniciar.addEventListener("click", function(){
    criarTabuleiroDaForca();
});

function criarTabuleiroDaForca(){
    areaJogo.innerHTML = "<canvas width='1200px' height='800px'></canvas>";
    var tabuleiro = document.querySelector("canvas");
    var pincel = tabuleiro.getContext("2d");

    pincel.fillStyle = "sandybrown";
    pincel.fillRect(0, 0, 1200, 800);

    EstruturaDaForca(pincel);
}

function EstruturaDaForca(pincel){
    pincel.fillStyle = "brown";

    pincel.beginPath();
    pincel.moveTo(50, 780);
    pincel.lineTo(80, 760);
    pincel.lineTo(120, 760);
    pincel.lineTo(150, 780);
    pincel.fill();

    pincel.fillRect(90, 220, 20, 540);
    pincel.fillRect(110, 220, 240, 20)
}