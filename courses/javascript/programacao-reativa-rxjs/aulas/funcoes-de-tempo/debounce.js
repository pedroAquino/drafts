let input = document.querySelector('#myInput'),
    h2 = document.querySelector('#myH2');

let observable = Rx.Observable.fromEvent(input, 'keyup');

observable
.debounce(() => Rx.Observable.interval(1000))
.subscribe(event => {
    h2.innerHTML = event.target.value;
});