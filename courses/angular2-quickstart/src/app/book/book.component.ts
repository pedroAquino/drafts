import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./book.component.html",
    selector: "book"
})
export class BookComponent {

    @Input() title : String;
    @Input() cover: String;
    @Input() numberOfPages: Number;
    @Input() authorName: String;

}