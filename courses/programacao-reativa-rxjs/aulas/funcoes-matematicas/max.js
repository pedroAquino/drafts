/*
    AULA 2
    
    O operador max retorna o maior valor emitido.

    É possível passar uma condição para o Count, assim ele retornará o maior
    item emitido que satisfaz a condição.
*/


let source = Rx.Observable.from([1,2,3,4,5]);

source
    .max()
    .subscribe(value => console.log(value));

source
    .max(x => x % 2 === 0)
    .subscribe(value => console.log(value));


