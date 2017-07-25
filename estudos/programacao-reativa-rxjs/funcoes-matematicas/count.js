/*
    AULA 1
    
    O operador couont retorna a quantidade de itens emitidos pelo observable.

    É possível passar uma condição para o Count, assim ele retornará a quantidade
    de  items emitidos que satisfazem a condição.
*/

//inicia um observable que emitirá valores numéricos de 1 a 10.
let observable = Rx.Observable.range(1, 10);

console.log('deve retornar 10');
observable.count().subscribe(value => console.log(value));

console.log('deve retornar 5 (numeros pares de 1 a 10)');
observable.count(x => x % 2 === 0).subscribe(value => console.log(value));