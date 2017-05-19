"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.books = [
            {
                "title": "As Crônicas de Nárnia",
                "cover": "http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2623167&qld=90&l=430&a=-1",
                "numberOfPages": 530,
                "authorName": "C.S. Lewis"
            },
            {
                "title": "As Crônicas de Olam",
                "cover": "http://tolkpublicacoes.com.br/wp-content/uploads/2015/03/Olam-Vol1.jpg",
                "numberOfPages": 720,
                "authorName": "L.L. Wurlitzer"
            },
            {
                "title": "Batman vs Superman",
                "cover": "http://s2.glbimg.com/Ls9nbZ_H65UxMRQK8Rz7Plh0Dbs=/e.glbimg.com/og/ed/f/original/2016/04/20/batman-vs-superman-comic.jpg",
                "numberOfPages": 110,
                "authorName": "John Doe"
            },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map