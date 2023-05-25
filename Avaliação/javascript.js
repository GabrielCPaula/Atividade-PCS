var carro=""; // variavel global //
var vetorCarros = []; // vetor global //
var stringCarros = ""; // variavel global //

function preencheObjeto(){ // função que sera utilizada ao clicar no botao no index e servira para guardar os valores digitados //
      var Marca = document.getElementById("txtMarca").value; // variavel que recebera o valor do campo de digitação no index //
      var Modelo = document.getElementById("txtModelo").value;  // variavel que recebera o valor do campo de digitação no index //
      var Ano = parseInt(document.getElementById("txtAno").value); // variavel que recebera o valor do campo de digitação no index e transformara ele em número inteiro //
      var Cor = document.getElementById("txtColor").value;  // variavel que recebera o valor do campo de digitação no index //
	  
	  carro = ["Marca: "+Marca + ", Modelo: "+Modelo+", Ano: "+Ano+", Cor: "+Cor]; // a variavel ira receber a resposta que aparecera no index//
	  
	  vetorCarros.push(carro); // vetor ira conter dentro dele a variavel carro //
	 
	  limpaTxt() // esta chamando a função limpaTxt //
}


function mostrarCarro(){ // função que sera rodada ao clicar no botao no index e servira para mostrar todos os itens digitados //
	stringCarros = vetorCarros.join('<br>'); // a string ira receber o vetor carros e quebrando linhas //
	
    var lblMostrarCarro = document.getElementById("lblMostrarCarro"); //a variavel ira pegar tudo que sera mostrado na label ou campo que aparecera a resposta no index //
    lblMostrarCarro.innerHTML = stringCarros; // a variavel ira receber e mostrar todo o conteudo da string //
}

function limpaTxt(){ // função que limpara todo texto digitado //
	document.getElementById("txtMarca").value = ""; // ira limpar o campo  de digitação marca  //
	document.getElementById("txtModelo").value = "";  // ira limpar o campo de digitação modelo//
	document.getElementById("txtAno").value = ""; // ira limpar o campo  de digitação ano //
	document.getElementById("txtColor").value = ""; // ira limpar o campo de digitação color //
}

 