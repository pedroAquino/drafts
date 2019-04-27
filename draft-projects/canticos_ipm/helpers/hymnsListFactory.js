const hymnListFactory = ({ 
    hinos = [] 
} = {}) => ({
    hinos,
    addHymn(hymn) {
        this.hinos = this.hinos.concat([hymn]);
        return this;
    }
});

module.exports = hymnListFactory;
