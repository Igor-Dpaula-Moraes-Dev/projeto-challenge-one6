 let input =document.getElementById('entrada');
 let encrypt = document.getElementById('criptografar');
 let mensagemCriptada = document.getElementById('msgcripto');
 let info = Element.innerHTML;
 let palavras_cripto =[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];
  
 
 function addcripto(){
    let valorEntrada = input.value;
   return valorEntrada;
};

function cripto(){
    let stringCriptografada = addcripto();
    
  for (let i = 0; i < palavras_cripto.length;i ++){
     // if(stringCriptografada.includes(stringCriptografada[i][0])){
        stringCriptografada = stringCriptografada.replaceAll(palavras_cripto[i][0], palavras_cripto[i][1])
      // } 
    }
     console.log(stringCriptografada);
      mensagemCriptada.value=stringCriptografada;
    //   input.value = "";
    //   input.focus();
      
    

    return stringCriptografada;
};
 

function descriptografar (string){
    let resultado = addcripto();
    resultado = resultado.replaceAll("enter","e");
    resultado = resultado.replaceAll("imes", "i");
    resultado = resultado.replaceAll("ai","a");
    resultado = resultado.replaceAll("ober","o");
    resultado = resultado.replaceAll("ufat","u");
    console.log(resultado); 
      input.value = "";
      input.focus();
      input.value= resultado;
    //  input.focus();
    mensagemCriptada.value ="";
    
    return resultado;
  
};
function copy(){
  mensagemCriptada.select();
 
  document.execCommand("copy");
  input.focus();
  document.execCommand("paste");

};
function campos(){
   if(input.value === ""){
    mensagemCriptada.value = "Nenhuma Mensagem Encontrada";
 // document.getElementById('msgcripto').innerHTML="Nenhuma Mensagem encontrada";
}
; 
}

input.addEventListener("focus",function(event){
    // se clicou a tecla enter(13)
    // if(event.){
    //    event.preventDefault();
       //caso seja teclado enter dentro do campo input o enter  passa a ter o mesmo comportamento do botão criptografar
       this.value = "";
    //    input =""; 
       input.focus();
     

 });

//escutando o evento no campo de entrada
 input.addEventListener("keyup",function(event){
     // se clicou a tecla enter(13)
     if(event.keyCode === 13){
        event.preventDefault();
        //caso seja teclado enter dentro do campo input o enter  passa a ter o mesmo comportamento do botão criptografar
         encrypt.click();
      }

  });