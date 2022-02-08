var palavras = ["ALURA", "ORACLE", "CHALLENGE", "PROGRAMACAO", "LOGICA"];
var botaoIniciar = document.querySelector(".iniciar-jogo");
var pagina = document.querySelector("body");
var palavraSecreta = "";
var quantidadeLetrasCertas = 0;
var letrasErradas = [];
var fimDeJogo = false;

botaoIniciar.addEventListener("click", function(){
    criarTabuleiroDaForca();
    
    sortearPalavra();

    letraPrecionada();
});

function letraPrecionada(){
    pagina.addEventListener("keypress", function(event){
        if(!fimDeJogo){
            if(event.key.replace(/[^A-Z]/g, "") == event.key){
                let posicoes = verificarSePalavraContemLetra(event.key);
                desenharLetraNoTabuleiro(posicoes, event.key);
            }
            else{
                console.log("invalido");
            }
        }
    });
}

function desenharLetraNoTabuleiro(posicoes, letra){
    if(posicoes.length > 0){
        desenharLetraCorreta(letra, posicoes);
        verificarSeJogadorVenceu();
    }
    else{
        if(!letrasErradas.includes(letra)){
            desenharLetraIncorreta(letra);
            letrasErradas.push(letra);
            desenharBonecoNaForca(letrasErradas.length);
            verificarSeJogadorPerdeu();
        }
    }
}

function sortearPalavra(){
    sorteado = Math.floor(Math.random() * palavras.length);
    palavraSecreta = palavras[sorteado];

    posicaoDasLetras(palavraSecreta.length);
}

function verificarSePalavraContemLetra(letraDigitada){
    let posicoes = [];
    for(let i = 0; i < palavraSecreta.length; i++){
        if(palavraSecreta[i] == letraDigitada){
            posicoes.push(i);
            quantidadeLetrasCertas++;
        }
    }

    return posicoes;
}

function verificarSeJogadorPerdeu(){
    if(letrasErradas.length >= 6){
        fimDeJogo = true;
        desenharMensagemDeDerrota();
    }
}

function verificarSeJogadorVenceu(){
    if(quantidadeLetrasCertas == palavraSecreta.length){
        fimDeJogo = true;
        desenharMensagemDeVitoria();
    }
}