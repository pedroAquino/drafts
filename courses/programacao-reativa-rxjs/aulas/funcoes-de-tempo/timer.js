let source = Rx.Observable.timer(2000, 1000)
.subscribe(x => console.log(x));