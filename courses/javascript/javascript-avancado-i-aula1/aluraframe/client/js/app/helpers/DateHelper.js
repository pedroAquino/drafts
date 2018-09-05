class DateHelper {

	constructor() {
		throw new Error("Esta classe não pode ser instanciada");
	}

	static textoParaData(dataString) {
		
		if(!/\d{4}-\d{2}-\d{2}/.test(dataString))
			throw new Error("Data inválida !");

		return new Date(...
			dataString
			.split('-')
			.map((item, indice) => item - indice % 2)
		);
	}

	static dataParaTexto(data) {
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}
}