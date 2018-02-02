import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Agendamento } from './agendamento';
import { AgendamentoDao } from './agendamento.dao';

@Injectable()
export class AgendamentoService {

    constructor(
        private _http: Http, 
        private _dao: AgendamentoDao
    ) {

    }

    agenda(agendamento: Agendamento) {
        let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.preco}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
        
        return this._dao.ehAgendamentoDuplicado(agendamento)
            .then(duplicado => {
                if(duplicado) { throw new Error('Agendamento já realizado !'); }

                return this._http.get(api)
                    .map(result => result.json())
                    .toPromise()
                    .then(result => agendamento.confirmado = true,
                        error => console.error(error))
                    .then(() => this._dao.salva(agendamento))
                    .then(() => agendamento.confirmado);
            });
    }
}