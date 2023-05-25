function nomedaFuncao(){
	let nome = document.getElementById("nome").value;
	idade = document.getElementById("idade").value;
	if(idade >=18){
		alert("Bem vindo, seu nome é: " + nome +", você é maior de idade!");
}
	else{
		alert("Bem vindo, seu nome é: " + nome +", você é menor de idade!");
	}
}
