import { Component, Input, Output, ElementRef, EventEmitter, AfterViewInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "modal",
    templateUrl: "./modal.component.html"
})
export class ModalComponent implements AfterViewInit {

    @Input() private titulo: string;
    @Input() private frase: string;

    @Output() confirma  = new EventEmitter();

    private _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }

    ngAfterViewInit() {

        $(this._element.nativeElement).dialog({
            title: this.titulo,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: ()=> {
                    $(this._element.nativeElement).dialog( "close" );
                },
                Confirmar: ()=> {
                    $(this._element.nativeElement).dialog( "close" );
                    this.confirma.emit();
                }
            }
        });
    }

    show() {
        $(this._element.nativeElement).dialog('open');
    }

}