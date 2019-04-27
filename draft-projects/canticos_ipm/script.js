const fs = require('fs');
const readLine = require('readline');
const hymnFactory = require('./helpers/hymnFactory');
const hymnListFactory = require('./helpers/hymnsListFactory');
const idGenerator = require('./helpers/idGenerator')();

let result = hymnListFactory();
let hymn;

const lineReader = readLine.createInterface({
    input: fs.createReadStream('hinario.txt')
});

lineReader.on('line', line => {
    const isTitleLine = line.match(/\d[.]/);

    if (isTitleLine) {
        if (hymn)
            result.addHymn(hymn);
            
        hymn = hymnFactory()
            .setId(idGenerator())   
            .setTitle(line
                .replace(/\d[.]/, '')
                .replace(/\d/, '')
                .trim());
    } else {
        hymn.addContent(line);
    }
});

lineReader.on('close', () => {
    fs.writeFile(
        'hinos.json',
        JSON.stringify(result),
        'utf8',
        () => console.log('Importação Finalizada.')
    );
})
