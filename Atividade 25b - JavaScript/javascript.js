function calculaIMC(){
	peso = document.getElementById("campoPeso").value;
	peso = parseFloat(peso);
	altura = document.getElementById("campoAltura").value;
	altura = parseFloat(altura);
	
	resultIMC = (peso / (altura * altura))*10000;
	
	var labelResult = document.getElementById("labelIMC");
	labelResult.innerHTML = "O IMC é: "+ resultIMC;
}

function converteEmCentimetros(){
	valorEmMetros = document.getElementById("campoMetros").value;
	valorEmMetros = parseFloat(valorEmMetros);
	
	valorConvertido = valorEmMetros * 100;
	var labelCentimetros = document.getElementById("labelConverter");
	labelCentimetros.innerHTML = valorConvertido + "Centimetros";
}

function soma(){
	num01 = parseFloat(document.getElementById("valor01").value);
	num02 = parseFloat(document.getElementById("valor02").value);
	resultadoSoma = num01 + num02;
	var labelSoma = document.getElementById("labelCalculadora");
	labelSoma.innerHTML = "Soma = " + resultadoSoma;
}

function subtracao(){
	num01 = parseFloat(document.getElementById("valor01").value);
	num02 = parseFloat(document.getElementById("valor02").value);
	resultadoSubtracao = num01 - num02;
	var labelSubtracao = document.getElementById("labelCalculadora");
	labelSubtracao.innerHTML = "Subtração = " + resultadoSoma;
}


function multiplicacao(){
	num01 = parseFloat(document.getElementById("valor01").value);
	num02 = parseFloat(document.getElementById("valor02").value);
	resultadoMultiplicacao = num01 * num02;
	var labelMultiplicacao = document.getElementById("labelCalculadora");
	labelMultiplicacao.innerHTML = "Multiplicação = " + resultadoMultiplicacao;
}


function divisao(){
	num01 = parseFloat(document.getElementById("valor01").value);
	num02 = parseFloat(document.getElementById("valor02").value);
	resultadoDivisao = num01 / num02;
	var labelDivisao = document.getElementById("labelCalculadora");
	labelDivisao.innerHTML = "Divisão = " + resultadoDivisao;
}


function converteData(){
	stringCompleta = document.getElementById("campoData").value;
	arrayData = stringCompleta.split("/");
	var labelData = document.getElementById("labelData");
	labelData.innerHTML = arrayData[1] + '/' + arrayData[0] + '/' + arrayData[2];
	
}