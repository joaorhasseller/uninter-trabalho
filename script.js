/*Esse Script serve para controlar os links clicados; ou seja a seção atual que o usuário clicou*/

function mostraSecao(secao){
    
    const mainContudo = document.querySelector('main.display-none');
    mainContudo.style.display = 'inline-block'

    const secoes = document.querySelectorAll('section');
    secoes.forEach(s => s.style.display = 'none');
    

    const boasVidas = document.querySelector('div.boasVindas');
    boasVidas.style.display = 'none';

    const secaoClicada = document.getElementById(secao);
    secaoClicada.style.display = 'inline-block'
}