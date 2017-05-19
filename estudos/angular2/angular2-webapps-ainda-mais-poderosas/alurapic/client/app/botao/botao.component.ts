import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    moduleId: module.id,
    templateUrl: "./botao.component.html",
    selector: "botao"
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: string = "";
    @Input() confirmar: boolean = false;

    @Output() acao = new EventEmitter();

    executaAcao() {
        this.acao.emit(null);
    }

}