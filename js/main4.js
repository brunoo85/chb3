let senhaDigitada2;
var aparece3 = document.querySelector(".aparece2");

function senha3 (){
   senhaDigitada3 = prompt("Coloque a senha aqui");
   
   if(senhaDigitada3==="os segredos do acampamento meio sangue"){
      aparece3.style.display="flex";
   }else {
      alert("senha incorreta");
   }
  }

  const botao3 = document.querySelector(".botao3");

  botao3.onclick = function(){
   senha3();
}