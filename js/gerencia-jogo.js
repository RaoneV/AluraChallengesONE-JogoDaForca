var palavras = ["ALURA", "ORACLE", "CHALLENGE", "PROGRAMACAO", "LOGICA"];
var botaoIniciar = document.querySelector(".iniciar-jogo");
var pagina = document.querySelector("body");

botaoIniciar.addEventListener("click", function(){
    criarTabuleiroDaForca();
    
    sortearPalavra();

    letraPrecionada();
});

function letraPrecionada(){
    pagina.addEventListener("keypress", function(event){
        console.log(event.key);
        if(event.key.replace(/[^A-Z]/g, "") == event.key){
            console.log("valido");
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