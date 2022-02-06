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
            if(verificarSePalavraContemLetra(event.key)){
                console.log("acertou letra");
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
    for(let i = 0; i < palavraSecreta.length; i++){
        if(palavraSecreta[i] == letraDigitada){
            return true;
        }
    }

    return false;
}