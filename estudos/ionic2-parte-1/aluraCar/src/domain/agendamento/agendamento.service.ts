import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Agendamento } from './agendamento';

@Injectable()
export class AgendamentoService {

    constructor(private _http: Http) {

    }

    agenda(agendamento: Agendamento) {
        let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.preco}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
        
        return this._http.get(api)
            .map(result => result.json())
            .toPromise();
    }
}