class View {
	constructor(elemento) {
		this._elemento = elemento;
	}

	template() { 
		throw new Error("O método template precisa ser implementado");
	}

	update(mensagem) {
		this._elemento.innerHTML = this.template(mensagem);
	}
}