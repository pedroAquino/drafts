function* generator(array) {
    yield* array;
}

Rx.Observable.from(generator([1,2,3,4]))
    .take(2)
    .subscribe(x => console.log(x));