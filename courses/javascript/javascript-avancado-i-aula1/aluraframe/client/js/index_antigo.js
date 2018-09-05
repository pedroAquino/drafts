var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];

console.log(campos);

function criaLinhaTabela(linha, valor) {
	var td = document.createElement("td");

	td.textContent = valor;
	linha.appendChild(td);
}

function limpaCampos() {
	campos[0].value = '';
	campos[1].value = '1';
	campos[2].value = '1';

	campos[0].focus();
}

document.querySelector(".form").addEventListener('submit', function(event) {
	event.preventDefault();

	var tr = document.createElement("tr");

	campos.forEach(function(campo) {
		criaLinhaTabela(tr, campo.value);
	});

	var valor = campos[1].value * campos[2].value;
	criaLinhaTabela(tr, valor);

	var tbody = document.querySelector("table tbody");
	tbody.appendChild(tr);

	limpaCampos();	
});