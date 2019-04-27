const idGenerator = () => {
    let lastId = 0;
    return () => {
        lastId++;
        return lastId;
    }
}

module.exports = idGenerator;