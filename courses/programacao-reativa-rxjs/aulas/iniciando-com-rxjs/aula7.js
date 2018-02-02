/*
    AULA 7 - Observables a partir de generators

    Generator são funções que podem ser executadas parte por parte.
    Toda vez que o comando "yield" é chamado, a função para de executar
    e um valor é retornado.
*/

function* generator(array) {
    yield* array;
}

Rx.Observable.from(generator([1,2,3,4]))
    .take(2)
    .subscribe(x => console.log(x));