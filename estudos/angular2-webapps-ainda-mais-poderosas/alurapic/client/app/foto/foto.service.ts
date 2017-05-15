import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component'
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;

    url() {
        return {
            base: "/v1/fotos",
            withId: function(id: string) : string {
                return this.base + "/" + id;
            }
        };
    }

    constructor(http: Http) {
        this.http = http;

        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
    }

    cadastra(foto: FotoComponent) : Observable<any> {
        if(foto._id) {
            return this.http.put(this.url().withId(foto._id), 
                JSON.stringify(foto), 
                { headers: this.headers })
                .map(
                    () => ({ inclusao: false, mensagem: "Foto atualizada com sucesso !" })
                );
        }
        else {
            return this.http.post(this.url().base, 
                JSON.stringify(foto), 
                { headers: this.headers })
                .map(
                    () => ({ inclusao: true, mensagem: "Foto incluída com sucesso !" })
                );
        }
    }

    lista(): Observable<FotoComponent[]> {
        return this.http.get(this.url().base)
            .map(res => res.json())
    }

    buscaPorId(id: string) : Observable<FotoComponent> {
        return this.http
            .get(this.url().withId(id))
            .map(res => res.json());
    }

    remover(foto: FotoComponent): Observable<Response> {
        return this.http.delete(this.url().withId(foto._id));
    }

}