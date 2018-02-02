let source = Rx.Observable.create(obs => {
    obs.next('Hello World !');
})
.delay(1000)
.subscribe(x => console.log(x));