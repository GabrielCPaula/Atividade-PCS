var add="";
function adiciona(){
	add = document.getElementById("tarefa").value;
	
	var item = document.createElement("li")
	var els = document.getElementsByTagName("ul")
	els[0]
	els[0].appendChild(item)
	item.innerHTML = add;
}

function remover(){
		if(confirm("Deseja confirmar a exclusão?")){
	add = document.getElementById("tarefa").value;
	var dl = document.getElementById("lista");
	var dli = dl.getElementsByTagName("li");
	dl.removeChild(dli[add-1]);
	console.log("Ação confirmada pelo usúario.");
	}
	else{
		console.log("Ação cancelada pelo usúario");
	}
}
	