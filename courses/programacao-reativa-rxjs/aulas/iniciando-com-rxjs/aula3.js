/*
    AULA 3: ARRAYS
*/

//declaramos um array de números
let numbers = [2, 3, 4, 5, 10];

//criamos o observable a partir do array
let observable = Rx.Observable.from(numbers);

//automaticamente ele emite todos os números do array
// e chama o complete() no fim do array.
let observer = observable.subscribe(
    value => console.log(value),
    err => console.log(err),
    () => console.log('complete !')
);
