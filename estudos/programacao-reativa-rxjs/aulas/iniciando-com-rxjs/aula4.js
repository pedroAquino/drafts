/*
    AULA4: HOT E COLD OBSERVABLES

    Observables podem ser classificados em hot e cold.
    
    Cold observables começam a emitir valores quando alguém se inscreve nele
    caso outro observer se inscreva nele reiniciará a stream de valores.

    Já os hot observables começam a transmitir ao chamar o método connect()
    a partir daí qualquer observer que se inscreva nele tera acesso à mesma
    stream de valores
*/

//criamos um observable a partir do método interval()
//ele emmite um numero incrementando sempre em 1
//a cada período de tempo especificado, no caso, 1 segundo
let observable = Rx.Observable.interval(1000);

//transformamos em um hot observable através do método publish()
let hot = observable.publish();

//nos inscrevemos nele, nada contece ainda
let observer = hot.subscribe(
    value => console.log(value)
);

//startamos o observable
hot.connect();