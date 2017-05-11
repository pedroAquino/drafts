import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component"
import { Http, Headers } from "@angular/http"
import { FormGroup, Validators, FormBuilder } from "@angular/forms"

@Component({
    moduleId: module.id,
    templateUrl: "./cadastro.component.html",
    selector: "cadastro"
})
export class CadastroComponent {
    
    foto : FotoComponent = new FotoComponent();
    http : Http;
    cadastroForm: FormGroup;

    constructor(http: Http, formBuilder: FormBuilder) {
        this.http = http;

        this.cadastroForm = formBuilder.group({
            titulo: ['', 
                Validators.compose([Validators.required, Validators.minLength(4)])
            ],
            url: ['', 
                 Validators.compose([Validators.required])
            ],
            descricao: []
        })
    }

    cadastrar(event) {
        event.preventDefault();

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let foto = this.foto;

        this.http.post("v1/fotos", 
            JSON.stringify(foto), 
            { headers: headers }
        ).subscribe(() => {
            console.log("Sucesso !");
            this.foto = new FotoComponent();
        }, error => console.log(error));
    }
}