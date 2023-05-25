var add="";
function adiciona(){
	add = document.getElementById("cachorro").value;
	var dl = document.getElementById("dogs_list");
	var item = document.createElement("li")
	dl.appendChild(item)
	item.innerHTML = add;
}
function removeCachorros(){
	add = document.getElementById("cachorro").value;
	var dl = document.getElementById("dogs_list");
	var dli = dl.getElementsByTagName("li")
	dl.removeChild(dli[add-1]);
}

function removeAtrasado(){
	setTimeout(function(){removeCachorros();}, 4000);
}