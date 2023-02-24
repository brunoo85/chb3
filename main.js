let senhaDigitada;

var divisao = document.querySelector(".aparece");

//função da fase 3
function senha (){
 senhaDigitada = prompt("Coloque a senha aqui");
 console.log(senhaDigitada);
 if(senhaDigitada==="anibal"){
    divisao.style.display="flex";
 }
}

const botao = document.querySelector(".botao");

botao.onclick = function(){
     senha();
}

//função da fase 1 
