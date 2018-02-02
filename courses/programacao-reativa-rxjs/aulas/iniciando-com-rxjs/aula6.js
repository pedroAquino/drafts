/*
    AULA6: Onservables a partir de promisses
*/

let promisse = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

let observable = Rx.Observable.fromPromise(promisse);

observable.subscribe(value => console.log(value))