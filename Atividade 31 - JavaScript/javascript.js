/*
var dl = document.getElementById("dogs_list");
var dli = dl.getElementsByTagName("li");
dl.removeChild(dli[3]);

var cl = document.getElementById("cats_list");
var cli = cl.getElementsByTagName("li");
cl.removeChild(cli[3]);
*/
var add="";
function adiciona(){
	add = document.getElementById("cachorro").value;
	var dl = document.getElementById("dogs_list");
	var item = document.createElement("li")
	dl.appendChild(item)
	item.innerHTML = add;
}

function adicionaGatos(){
	add = document.getElementById("gatos").value;
	var cl = document.getElementById("cats_list");
	var item = document.createElement("li");
	cl.appendChild(item);
	item.innerHTML = add;
}

function removeCachorros(){
	add = document.getElementById("cachorro").value;
	var dl = document.getElementById("dogs_list");
	var dli = dl.getElementsByTagName("li")
	dl.removeChild(dli[add-1]);
}

function removeGatos(){
	add = document.getElementById("gatos").value;
	var cl = document.getElementById("cats_list");
	var cli = cl.getElementsByTagName("li")
	cl.removeChild(cli[add-1]);
}