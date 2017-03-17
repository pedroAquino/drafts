class ArquivoHelper {

	constructor() {
		throw new Error("Esta classe não deve ser instanciada.");
	}

	static stringParaArray(texto) {
		return texto.toUpperCase().split('/')
	}

}