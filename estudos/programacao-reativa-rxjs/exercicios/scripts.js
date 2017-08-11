let button = document.querySelector('#button'),
    clickSrteamDiv = document.querySelector('#clickStream'),
    bufferedClickStreamDiv = document.querySelector('#bufferedClickStream'),
    mappedClickStreamDiv = document.querySelector('#mappedClickStream'),
    clickObservable = Rx.Observable.fromEvent(button, 'click');


/* main program */

clickObservable
    .subscribe(click => logClick('A CLICK HAPENNED !', clickSrteamDiv));

clickObservable
    .debounce(() => Rx.Observable.interval(250))
    .subscribe(multipleClicks => logClick('A MULTIPLE CLICK HAPENNED !', bufferedClickStreamDiv))

function logClick(click, div) {
    div.innerHTML += `
        <span class="float-left">
            <h2> ${click} </h2>
        </span>
    `;
}