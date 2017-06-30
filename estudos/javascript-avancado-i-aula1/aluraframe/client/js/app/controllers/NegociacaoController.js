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

		this._mensagem = new Mensagem('');
		this._mensagemView = new MensagemView($("#mensagem"));
		this._mensagemView.update(this._mensagem);
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

		this._mensagem.texto = "negociação criada com sucesso !";
		this._mensagemView.update(this._mensagem);
	}

	removeNegociacao(evt) {
		evt.preventDefault();
		
		this._listaNegociacoes.esvazia();
		this._limpaCampos();

		this._view.update(this._listaNegociacoes);

		this._mensagem.texto = "negociação removida com sucesso !";
		this._mensagemView.update(this._mensagem);
	}
}