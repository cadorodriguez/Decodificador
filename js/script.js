var textInput = document.querySelector("#enviar-texto");
var outInput = document.querySelector("#receber-texto");

function criptografar(){

	var texto = textInput.value;

	var resultadoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "inst").replace(/a/g,"alt").replace(/o/g, "only").replace(/u/g,"ul");

	document.getElementById('receber-texto').innerHTML = '<textarea readonly id="envia-texto">' + resultadoCriptografado + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

	var texto = textInput.value;

	var resultadoDescriptografado = texto.replace(/enter/g, "e").replace(/inst/g, "i").replace(/alt/g, "a").replace(/only/g, "o").replace(/ul/g,"u");

	document.getElementById('receber-texto').innerHTML = '<textarea readonly id="envia-texto">' + resultadoDescriptografado + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
} 

function copiar(){

	var copiaTexto = document.getElementById('envia-texto');

	copiaTexto.select();
	document.execCommand('copy');
	alert("Texto Copiado"); 
}