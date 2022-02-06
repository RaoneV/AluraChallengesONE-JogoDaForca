var areaJogo = document.querySelector(".area-de-jogo");
const corForca = "brown";
const corLetraEscolhida = "black";
var pincel;
var posicoesLetrasX = [];
var posicaoLetraErradaX = 800;

function criarTabuleiroDaForca(){
    areaJogo.innerHTML = "<canvas width='1200px' height='800px'></canvas>";
    var tabuleiro = document.querySelector("canvas");
    pincel = tabuleiro.getContext("2d");

    pincel.fillStyle = "sandybrown";
    pincel.fillRect(0, 0, 1200, 800);

    estruturaDaForca(pincel);
}

function estruturaDaForca(pincel){
    pincel.fillStyle = corForca;

    pincel.beginPath();
    pincel.moveTo(50, 780);
    pincel.lineTo(80, 760);
    pincel.lineTo(120, 760);
    pincel.lineTo(150, 780);
    pincel.fill();

    pincel.fillRect(90, 220, 20, 540);
    pincel.fillRect(110, 220, 240, 20)
}

function posicaoDasLetras(quantLetras){
    pincel.fillStyle = corForca;
    let pontoMedio = 675;

    if((quantLetras % 2) == 0){
        let aux = 0;
        for(var i = 0; i < quantLetras; i+=2){
            pincel.fillRect(pontoMedio-50-aux, 774, 40, 6);
            pincel.fillRect(pontoMedio+aux, 774, 40, 6);
            posicoesLetrasX.push(pontoMedio-50-aux);
            posicoesLetrasX.push(pontoMedio+aux);
            aux += 50;
        }
    }
    else{
        pincel.fillRect(pontoMedio-25, 774, 40, 6);
        posicoesLetrasX.push(pontoMedio-25);
        let aux = 0;
        for(var i = 0; i < quantLetras-1; i+=2){
            pincel.fillRect(pontoMedio-75-aux, 774, 40, 6);
            pincel.fillRect(pontoMedio+25+aux, 774, 40, 6);
            posicoesLetrasX.push(pontoMedio-75-aux);
            posicoesLetrasX.push(pontoMedio+25+aux);
            aux += 50;
        }
    }
    posicoesLetrasX.sort(function(a, b){
        return a - b;
    });
}

function estilizarTextoDesenhado(){
    pincel.fillStyle = corLetraEscolhida;
    pincel.font = "bold 40px arial";
    pincel.textAlign = "center";
}

function desenharLetraCorreta(letra, posicoes){
    let coordXCentralTraco;

    estilizarTextoDesenhado();

    for(let i = 0; i < posicoes.length; i++){
        coordXCentralTraco = posicoesLetrasX[posicoes[i]]+20;
        pincel.fillText(letra, coordXCentralTraco, 770);
    }
}

function desenharLetraIncorreta(letra){
    estilizarTextoDesenhado();

    pincel.fillText(letra, posicaoLetraErradaX, 350);
    posicaoLetraErradaX += 40;
}