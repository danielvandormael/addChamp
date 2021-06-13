const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function send(idInput, idOutput) {
  var text = document.getElementById(idInput).value
  if(text == ""){
    if(idOutput == 'nome'){
      text = "Titulo";
      document.getElementById("nome2").innerHTML = text;
    }else if(idOutput == 'organizador'){
      text = "Organizador";
      document.getElementById("organizador2").innerHTML = text;
    }else if(idOutput == 'inicio' ){
      text = "00/00/0000";
      document.getElementById("inicio2").innerHTML = text;
    }else if(idOutput == 'fim'){
      text = "00/00/0000";
      document.getElementById("fim2").innerHTML = text;
    }else if(idOutput == 'vagas'){
      text= "0";
      document.getElementById("vagas2").innerHTML = text;
    }else if(idOutput == "price"){
      text= "R$ 0";
      document.getElementById("price2").innerHTML = text;
    }else if(idOutput == "first"){
      document.getElementById("first2").innerHTML = text;
    }else if(idOutput == "pay"){
      const previewContainer1 = document.getElementById("championship-demo");
      const previewDefaultText1 = previewContainer1.querySelector(".disc-title");
      previewDefaultText1.style.display = null;
    }
  }else{
    if(idOutput == "price"){
      text= "R$ " + text;
      document.getElementById("price2").innerHTML = text;
    }else if(idOutput == 'nome'){
      document.getElementById("nome2").innerHTML = text;
    }else if(idOutput == 'organizador'){
      document.getElementById("organizador2").innerHTML = text;
    }else if(idOutput == 'inicio' ){
      text = text.slice(8,10) + '/' + text.slice(5,7) + '/' + text.slice(0,4);
      document.getElementById("inicio2").innerHTML = text;
    }else if(idOutput == 'inicio'){
      text = text.slice(8,10) + '/' + text.slice(5,7) + '/' + text.slice(0,4);
      document.getElementById("inicio2").innerHTML = text;
    }else if( idOutput == 'fim'){
      text = text.slice(8,10) + '/' + text.slice(5,7) + '/' + text.slice(0,4);
      document.getElementById("fim2").innerHTML = text;
    }else if(idOutput == 'vagas'){
      document.getElementById("vagas2").innerHTML = text;
    }else if(idOutput == 'first'){
      document.getElementById("first2").innerHTML = text; 
    }else if(idOutput == "pay"){
      const previewContainer1 = document.getElementById("championship-demo");
      const previewDefaultText1 = previewContainer1.querySelector(".disc-title");
      previewDefaultText1.style.display = "block";
    }
  }

  return document.getElementById(idOutput).innerHTML = text;
}

const inpFile = document.getElementById("file-input");
const previewContainer = document.getElementById("cardImage");
const previewDefaultText = previewContainer.querySelector(".card-image-demo-text");
const previewContainer2 = document.getElementById("cardImage2");

inpFile.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    const temp = URL.createObjectURL(file);

    previewDefaultText.style.display = "none";
    previewContainer.style.backgroundImage = `url(${temp})`;
    previewContainer2.style.backgroundImage = `url(${temp})`;
    }else {
      previewDefaultText.style.display = null;
      previewContainer.style.backgroundImage = null;
      previewContainer2.style.backgroundImage = null;
    }

})

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}