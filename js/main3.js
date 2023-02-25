let senhaDigitada2;
var aparece2 = document.querySelector(".aparece2");

function senha2 (){
   senhaDigitada2 = prompt("Coloque a senha aqui");
   
   if(senhaDigitada2==="magnus chase"){
      aparece2.style.display="flex";
   }else {
      alert("senha incorreta");
   }
  }

  const botao2 = document.querySelector(".botao2");

  botao2.onclick = function(){
   senha2();
}