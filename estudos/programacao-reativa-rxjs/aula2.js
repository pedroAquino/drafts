/*
    AULA 2: SUBJECTS
*/

/*
    criamos um observable que emite um valor rabdômico a cada segundo
    repetindo essa operação 5 vezes
*/
let observable = Rx.Observable.create(observer => {
    let i = 0;
    let interval = setInterval(() => {
        // se i = 5 finaliza o observable e mata o interval
        if(i === 5) {
            clearInterval(interval);
            observer.complete();
        } else {
            // incrementa i e emite o valor randômico gerado
            i++;
            observer.next(`value is ${parseInt(Math.random()*100)}`);
        }
    }, 1000)
});

/*
    criamos o nosso subject
*/
let subject = new Rx.Subject();
/*
    inscrevemos o subject no observable
*/
let subSource = observable.subscribe(subject);


/*
    inscrevemos dois observers no nosso subject
    podemos notar no console que os valores que o observable emite
    e que são imprimidos pelo observer são sempre iguais, ou seja
    o subject garante que que todos os observers inscritos recebam o
    mesmo contexto emitido pelo observer.
*/
let observer1 = subject.subscribe(
    value => console.log(value),
    err => console.log(err),   
    () => console.log('complete !')
);

let observer2 = subject.subscribe(
    value => console.log(value),
    err => console.log(err),   
    () => console.log('complete !')
);