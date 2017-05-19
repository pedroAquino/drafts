import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component"
import { FormGroup, Validators, FormBuilder } from "@angular/forms"
import { FotoService } from "../foto/foto.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    moduleId: module.id,
    templateUrl: "./cadastro.component.html",
    selector: "cadastro"
})
export class CadastroComponent {
    
    foto : FotoComponent = new FotoComponent();
    cadastroForm: FormGroup;
    fotoService: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = "";

    constructor(formBuilder: FormBuilder, fotoService: FotoService, route: ActivatedRoute,  router: Router) {

        this.fotoService = fotoService;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id = params['id'];
            
            if(id) {
                this.fotoService
                    .buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.error(erro)
                    );
            }
        })

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

        this.fotoService
            .cadastra(this.foto)
            .subscribe(resposta => {
                console.log("Sucesso !");
                
                this.mensagem = resposta.texto;

                if(resposta.inclusao) {
                    this.foto = new FotoComponent();
                }
                else {
                    this.router.navigate(['']);
                }
                
            }, error => console.log(error));
    }
}