let senhaDigitada2;
var aparece = document.querySelector(".aparece4");

function senha3 (){
   senhaDigitada2 = prompt("Coloque a senha aqui");
   
   if(senhaDigitada2==="brunnmigi"){
      aparece.style.display="flex";
   }else {
      alert("senha incorreta");
   }
  }

  const botao = document.querySelector(".botao");

  botao.onclick = function(){
   senha3();
}