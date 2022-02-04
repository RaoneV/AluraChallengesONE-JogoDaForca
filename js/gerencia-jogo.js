var palavras = ["ALURA", "ORACLE", "CHALLENGE", "PROGRAMACAO", "LOGICA"];
var botaoIniciar = document.querySelector(".iniciar-jogo");

botaoIniciar.addEventListener("click", function(){
    sortearPalavra();
    
    criarTabuleiroDaForca();
});

function sortearPalavra(){
    sorteado = Math.floor(Math.random() * palavras.length);
    palavraSecreta = palavras[sorteado];
    console.log(palavraSecreta, sorteado);
}