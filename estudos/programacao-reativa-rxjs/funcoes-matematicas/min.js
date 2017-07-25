let source = Rx.Observable.from([1,2,3,4,5]);


source
    .min()
    .subscribe(value => console.log(value));