var carro = ""
function salvar(){
	carro ={
	marca: document.getElementById("marca").value,
	modelo: document.getElementById("modelo").value,
	ano: parseInt(document.getElementById("ano").value),
	cor: document.getElementById("cor").value
}
}

function informacoes(){
	var labelResultado = document.getElementById("resultado");
	labelResultado.innerHTML = ("O carro é um "+ carro.marca + ", " +
		"modelo " + carro.modelo + ", " +
		"ano " + carro.ano + "," + 
		"cor " + carro.cor);
}
