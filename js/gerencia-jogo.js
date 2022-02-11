var palavras = ["ALURA", "ORACLE", "CHALLENGE", "PROGRAMACAO", "LOGICA"];
var botaoIniciar = document.querySelector(".iniciar-jogo");
var botaoAdicionar = document.querySelector(".adicionar-palavra");
var palavraNova = document.querySelector(".palavra-nova");
var pagina = document.querySelector("body");
var palavraSecreta = "";
var quantidadeLetrasCertas = 0;
var letrasErradas = [];
var fimDeJogo = false;

botaoIniciar.addEventListener("click", function(){
    inicializarVariaveisGerencia();
    
    criarTabuleiroDaForca();
    
    sortearPalavra();

    pagina.addEventListener("keypress", letraPrecionada);
});

function inicializarVariaveisGerencia(){
    palavraSecreta = "";
    quantidadeLetrasCertas = 0;
    letrasErradas.length = 0;
    fimDeJogo = false;
}

function letraPrecionada(event){
    if(!fimDeJogo){
        if(event.key.replace(/[^A-Z]/g, "") == event.key){
            let posicoes = verificarSePalavraContemLetra(event.key);
            desenharLetraNoTabuleiro(posicoes, event.key);
        }
    }
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

botaoAdicionar.addEventListener("click", adicionarNovaPalavraAoJogo);

function adicionarNovaPalavraAoJogo(){
    if(palavraNova.value.replace(/[^A-Za-z]/g, "") == palavraNova.value && palavraNova.value != ""){
        let palavraMaiuscula = palavraNova.value.toUpperCase();
        palavras.push(palavraMaiuscula);
        palavraNova.value = "";

        let mensagem = document.querySelector(".mensagem-palavra-adicionada");
        mensagem.textContent = "Palavra adicionada!";

        let limpar = setTimeout(function(){
            mensagem.textContent = "";
        }, 2000);
    }
}