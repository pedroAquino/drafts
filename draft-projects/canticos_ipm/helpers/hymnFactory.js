const hymnFactory = ({
    id = 0,
    title = '',
    content = ''
} = {}) => ({
    id,
    title,
    content,
    setId(id) {
        this.id = id;
        return this;
    },
    setTitle(title) {
        this.title = title;
        return this;
    },
    addContent(verse) {
        this.content += verse.trim() === '' ? 
            ' <br/><br/> ' : ` <br/> ${verse}`;
        return this;
    }
});

module.exports =  hymnFactory;