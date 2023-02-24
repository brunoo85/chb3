let senhaDigitada1;
var aparece1 = document.querySelector(".aparece1");

function senha1 (){
   senhaDigitada1 = prompt("Coloque a senha aqui");
   
   if(senhaDigitada1==="grifo"){
      aparece1.style.display="block";
   }
  }

  const botao1 = document.querySelector(".botao1");

  botao1.onclick = function(){
   senha1();
}