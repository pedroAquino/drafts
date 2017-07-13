/*
    LIÇÃO 1: OBSERVABLES E OBSERVERS
*/

//cria um observable
let observable = Rx.Observable.create(observer => {
        //a cada segundo incrementamos a variável i e
        // chamamos a função next() passando um valor para
        // o observer
        let i = 1;
        setInterval(() => {
            //se i === 5 completamos o observable,
            // ou seja, ele morre
            if (i > 5) {
                observer.complete();
            } else {
                // chama o observer passando um valor
                observer.next(`executado ${i++} vezes`);
            }
        }, 1000); 
    }
);

// criamos um observer que se inscreve no observable
// através da função subscribe()
let observer = observable.subscribe(
    //chamado quando a função next é executada no observable
    value => console.log(`observer 1 ${value}`),
    // chamado quando a função error() é chamada no observable
    err => console.log('Error !'),
    //chamado quando a função complete é chamada no observable
    () => { 
        console.log('OBSERVER1 COMPLETED');
        console.log('INICIANDO OBSERVER2');

        let observer2 = observable.subscribe(
            value => console.log(`observer 2 ${value}`),
            err => console.log('Error !'),
            () => console.log('OBSERVABLE2 COMPLETED')
        )
    }
);