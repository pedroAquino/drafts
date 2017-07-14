/*
    AULA 5: Observables a partir de eventos.
*/

// buscamos o input e o h2 na página.
let input = document.querySelector('#myInput'),
    h2 = document.querySelector('#myH2');

// iniciamos o observable a partir do evento 'keyup' do input
// cada vez que o usuário digitar o observable emitirá o valor
// da input.
let observable = Rx.Observable.fromEvent(input, 'keyup');

// recebemos o valor do input e adicionamos ao h2
observable.subscribe(event =>  {
    h2.innerHTML = event.target.value;
});