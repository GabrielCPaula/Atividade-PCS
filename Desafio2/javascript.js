function removeAtrasado(){
	var temp = document.getElementById("tempo").value;
	tempo = temp*1000
	setTimeout(function(){alerta();}, tempo);
}

function alerta(){
	alert("Tempo Esgotado");
}