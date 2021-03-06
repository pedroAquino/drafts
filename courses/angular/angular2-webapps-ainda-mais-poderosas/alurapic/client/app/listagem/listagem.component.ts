import { Component } from "@angular/core";
import { FotoService } from "../foto/foto.service";
import { FotoComponent } from "../foto/foto.component";
import { PainelComponent } from "../painel/painel.component";

@Component({
    moduleId: module.id,
    templateUrl: "./listagem.component.html",
    selector: "listagem",
    styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    fotoService: FotoService;
    mensagem: string = "";

    constructor(fotoService: FotoService) {

        this.fotoService = fotoService;

        this.fotoService
            .lista()
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, erro => {
                console.error("Houve um erro ao buscar as imagens");
            });

    }

    remover(foto: FotoComponent, painel: PainelComponent) {
        this.fotoService
            .remover(foto)
            .subscribe(() => {
                
                painel.fadeOut(() => {
                    let novasFotos = this.fotos.filter((item) => {
                        return item._id != foto._id;
                    });
                    this.fotos = novasFotos;
                    this.mensagem = "Foto  excluída com sucesso";
                    console.log("Foto  excluída com sucesso");
                });

            }, erro => {
                console.error("Houve um erro ao excluir a foto");
            });
    }
}