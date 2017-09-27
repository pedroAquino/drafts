import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Agendamento } from './agendamento';
import { Storage } from '@ionic/storage';

@Injectable()
export class AgendamentoService {

    constructor(
        private _http: Http, 
        private _storage: Storage
    ) {

    }

    agenda(agendamento: Agendamento) {
        let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.preco}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
        
        return this._http.get(api)
            .map(result => result.json())
            .toPromise()
            .then(
                result => agendamento.confirmado = true,
                error => console.error(error)
            ).then(() => { 
                const key = agendamento.email + agendamento.data.substring(0, 10)
                return this._storage.set(key, agendamento);
            }).then(() => agendamento.confirmado);
    }
}