const hymnFactory = ({
    id = 0,
    indice = '',
    letra = '',
    titulo = '',
    titulo_lowercase = '',
} = {}) => ({
    id,
    indice,
    letra,
    titulo,
    titulo_lowercase,
    setId(id) {
        this.id = id;
        this.indice = id.toString();
        return this;
    },
    setTitle(title) {
        this.titulo  = title;
        this.titulo_lowercase = title.toLowerCase();
        return this;
    },
    addContent(verse) {
        this.letra += verse.trim() === '' ? 
            ' <br/><br/> ' : ` <br/> ${verse}`;
        return this;
    }
});

module.exports =  hymnFactory;