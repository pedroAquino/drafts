let input = document.querySelector('#filtroProjetos'),
    projetosDiv = document.querySelector('#projetos');


let observable = Rx.Observable.fromEvent(input, 'keyup');
    
observable
    .debounce(() => Rx.Observable.interval(500))
    .map(event => event.target.value)
    .filter(text => text.length > 2)
    .subscribe(
        value => console.log(value),
        error => console.error(error),
        () => console.log('Completed')
    );

