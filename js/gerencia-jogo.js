var palavras = ["ALURA", "ORACLE", "CHALLENGE", "PROGRAMACAO", "LOGICA"];
var botaoIniciar = document.querySelector(".iniciar-jogo");
var pagina = document.querySelector("body");
var palavraSecreta = "";

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
                console.log("acertou letra");
                desenharLetraCorreta(event.key, posicoes);
            }
            else{
                console.log("errou letra");
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