
//cria uma stream de urls
//para cada url emitida faz uma chamada na url e
// emite uma nova stream baseada na promise retornada pela chamada
// através do flatMap pegamos o resultado da stream e não a strem em si.
// renderizamos a resposta da requisição na tela
/*-----------------------------------------------------------------------*/
const div = document.querySelector('#whoToFollow'),
      button = document.querySelector('#refreshBtn');

const refreshStream = Rx.Observable
    .fromEvent(button, 'click')
    .map(click => {
        var randomOffset = Math.floor(Math.random()*500);
        return 'https://api.github.com/users?since=' + randomOffset;
    })
    .startWith('https://api.github.com/users')
    .flatMap(requestUrl => {
        return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
    })
    .subscribe(response => {
        if(div.innerHTML != '') {
            div.innerHTML = '';
        }

        response.forEach((item, index) => {
            if (index >= 3) {
                return;
            }
            div.innerHTML += `
                <li>
                    <h3>${item.login}</h3>
                    <img class="avatar-url" src="${item.avatar_url}" />
                </li>
            `;
        });
    });

/*-----------------------------------------------------------------------*/

/*
 criamos uma stream a partir do click do botão refresh
 para cada click emitido mapeamos para uma nova url da api
-----------------------------------------------------------------------*/
