let senhaDigitada5;
var aparece = document.querySelector(".aparece4");

function senha4 (){
   senhaDigitada5 = prompt("Coloque a senha aqui");
   
   if(senhaDigitada5==="brunnmigi"){
      aparece.style.display="flex";
   }else {
      alert("senha incorreta");
   }
  }

  const botao = document.querySelector(".botao4");

  botao.onclick = function(){
   senha4();
}