function calcularSoma() {
			stringCompleta = document.getElementById("numeros").value;
			arrayFinal = stringCompleta.split(",");
			soma = 0;
			for ( i = 0; i < arrayFinal.length; i++) {
				soma += parseInt(arrayFinal[i]);
			}
			alert("A soma dos números é: " + soma);
		}