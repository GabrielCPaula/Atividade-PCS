var carro="";
var vetorCarros = [];
var stringCarros = "";

function preencheObjeto(){
      var Marca = document.getElementById("txtMarca").value;
      var Modelo = document.getElementById("txtModelo").value;
      var Ano = parseInt(document.getElementById("txtAno").value);
      var Cor = document.getElementById("txtCor").value;
	  
	  carro = ["Marca: "+Marca+ "  --  "+"Modelo: "+Modelo+"  --  "+"Ano: "+Ano+"  --  "+"Cor: "+Cor];
	  
	  vetorCarros.push(carro);
	 
	  limpaTxt()
}


function mostrarCarro(){
	stringCarros = vetorCarros.join('<br><br>');
	
    var lblMostrarCarro = document.getElementById("lblMostrarCarro");
    lblMostrarCarro.innerHTML = stringCarros;
}

function limpaTxt(){
	document.getElementById("txtMarca").value = "";
	document.getElementById("txtModelo").value = "";
	document.getElementById("txtAno").value = "";
	document.getElementById("txtCor").value = "";
}

function procurarVeiculo() {
        var id = parseInt(document.getElementById("idCarros").value);
        
        if (id >= 0 && id < vetorCarros.length) {
            var veiculoEncontrado = vetorCarros[id];
            var lblMostrarCarro = document.getElementById("lblMostrarCarro");
            lblMostrarCarro.innerHTML = veiculoEncontrado;
        } 
		else {
            var lblMostrarCarro = document.getElementById("veiculoProcurado");
            lblMostrarCarro.innerHTML = "Veículo não encontrado.";
        }
    }