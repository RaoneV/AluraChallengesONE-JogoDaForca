var palavras = ["ALURA", "ORACLE", "CHALLENGE", "PROGRAMACAO", "LOGICA"];
var botaoIniciar = document.querySelector(".iniciar-jogo");
var pagina = document.querySelector("body");
var palavraSecreta = "";
var letrasErradas = [];

botaoIniciar.addEventListener("click", function(){
    criarTabuleiroDaForca();
    
    sortearPalavra();

    letraPrecionada();
});

function letraPrecionada(){
    pagina.addEventListener("keypress", function(event){
        console.log(event.key);
        if(event.key.replace(/[^A-Z]/g, "") == event.key){
            let posicoes = verificarSePalavraContemLetra(event.key);
            if(posicoes.length > 0){
                desenharLetraCorreta(event.key, posicoes);
            }
            else{
                if(!letrasErradas.includes(event.key)){
                    desenharLetraIncorreta(event.key);
                    letrasErradas.push(event.key);
                    desenharBonecoNaForca(letrasErradas.length);
                }
            }
        }
        else{
            console.log("invalido");
        }
    });
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
        }
    }

    return posicoes;
}