
function findMultiplesOf3And5() {
    let counter = 0;
    let limit = 1000;

    const isMultiple = (number, multiple) =>  number % multiple == 0;

    while(limit > 1) {
        limit--;
        if (isMultiple(limit, 3) || isMultiple(limit, 5)) {
            console.log(`multiple found: ${limit}`);
            counter += limit;
        }
    }

    console.log(`sum: ${counter}`);
    return counter;
}

findMultiplesOf3And5();