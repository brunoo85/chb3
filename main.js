let senhaDigitada;
var divisao = document.querySelector(".aparece");

function senha (){
 senhaDigitada = prompt("Coloque a senha aqui");
 console.log(senhaDigitada);
 if(senhaDigitada==="teste"){
    divisao.style.display='flex';
 }
}

const botao = document.querySelector(".botao");

botao.onclick = function(){
     senha();
}