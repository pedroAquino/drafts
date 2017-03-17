class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);

		this._data = $("#data");
		this._quantidade = $("#quantidade");
		this._valor = $("#valor");

		this._view = new NegociacaoView(
			$("#negociacoes")
		);

		this._listaNegociacoes = new ListaNegociacoes();

		this._view.update(this._listaNegociacoes);
	}

	
	_criaNegociacao() {
		return new Negociacao(
			DateHelper.textoParaData(this._data.value),
			this._quantidade.value,
			this._valor.value
		);
	}

	_limpaCampos() {
		this._data.value = "";
		this._quantidade.value = "0";
		this._valor.value = "0";

		this._data.focus();
	}

	adicionaNegociacao(evt) {
		evt.preventDefault();
		
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaCampos();

		this._view.update(this._listaNegociacoes);
	}
}