var areaJogo = document.querySelector(".area-de-jogo");
const corFundo = "#CDE6F5";
const corForca = "brown";
const corCorda = "#E0BF00";
var pincel;
var posicoesLetrasX = [];
var posicaoLetraErradaX = 800;

function inicializarVariaveisDesenho(){
    pincel.clearRect(0, 0, 1200, 800);
    posicoesLetrasX.length = 0;
    posicaoLetraErradaX = 800;
}

function criarTabuleiroDaForca(){
    areaJogo.innerHTML = "<canvas width='1200px' height='800px'></canvas>";
    let tabuleiro = document.querySelector("canvas");
    pincel = tabuleiro.getContext("2d");

    inicializarVariaveisDesenho();

    pincel.fillStyle = corFundo;
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
    pincel.fillRect(110, 220, 260, 20)

    pincel.fillStyle =  corCorda;
    pincel.fillRect(345, 240, 10, 65);

    //Desenhar externo da corda
    desenharSemiArcoDaCorda(350, 300, 315, 330, 315, 370, 350, 370);
    desenharSemiArcoDaCorda(350, 300, 385, 330, 385, 370, 350, 370);

    //Desenhar interno da corda
    pincel.fillStyle =  corFundo;
    desenharSemiArcoDaCorda(350, 310, 325, 340, 325, 360, 350, 360);
    desenharSemiArcoDaCorda(350, 310, 375, 340, 375, 360, 350, 360);
}

function desenharBonecoNaForca(erros){
    pincel.fillStyle =  "white";

    switch(erros){
        case 1:
            desenharCabeca();
            break;
        case 2:
            desenharTronco();
            break;
        case 3:
            desenharPernaEsquerda();
            break;
        case 4:
            desenharPernaDireita();
            break;
        case 5:
            desenharBracoEsquerdo();
            break;
        case 6:
            desenharBracoDireito();
            break;
    }
}

function desenharSemiArcoDaCorda(xInicio, yInicio, xCp1, yCp1, xCp2, yCp2, xFim, yFim){
    pincel.beginPath();
    pincel.moveTo(xInicio, yInicio);
    pincel.bezierCurveTo(xCp1, yCp1, xCp2, yCp2, xFim, yFim);
    pincel.fill();
}

function desenharCabeca(){
    pincel.beginPath();
    pincel.arc(350, 325, 35, 0, Math.PI*2, true);
    pincel.fill();
}

function desenharTronco(){
    pincel.fillRect(340, 370, 20, 150);
}

function desenharBracoEsquerdo(){
    desenharMembro(360, 380, 430, 450, 420, 460, 360, 400);
}

function desenharBracoDireito(){
    desenharMembro(340, 380, 270, 450, 280, 460, 340, 400);
}

function desenharPernaEsquerda(){
    desenharMembro(360, 510, 430, 580, 420, 590, 350, 520);
}

function desenharPernaDireita(){
    desenharMembro(340, 510, 270, 580, 280, 590, 350, 520);
}

function desenharMembro(x1, y1, x2, y2, x3, y3, x4, y4){
    pincel.beginPath();
    pincel.moveTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.lineTo(x3, y3);
    pincel.lineTo(x4, y4);
    pincel.fill();
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

function estilizarTextoDesenhado(corTexto){
    pincel.fillStyle = corTexto;
    pincel.font = "bold 40px arial";
    pincel.textAlign = "center";
}

function desenharLetraCorreta(letra, posicoes){
    let coordXCentralTraco;
    
    estilizarTextoDesenhado("black");

    for(let i = 0; i < posicoes.length; i++){
        coordXCentralTraco = posicoesLetrasX[posicoes[i]]+20;
        pincel.fillText(letra, coordXCentralTraco, 770);
    }
}

function desenharLetraIncorreta(letra){
    estilizarTextoDesenhado("black");

    pincel.fillText(letra, posicaoLetraErradaX, 350);
    posicaoLetraErradaX += 40;
}

function desenharMensagemDeDerrota(){
    estilizarTextoDesenhado("red");

    pincel.fillText("Fim de Jogo", 700, 500, 200);
    pincel.fillText("Você Perdeu!", 700, 550, 250);
}

function desenharMensagemDeVitoria(){
    estilizarTextoDesenhado("green");

    pincel.fillText("Você venceu", 700, 500, 250);
    pincel.fillText("Parabéns!", 700, 550, 200);
}