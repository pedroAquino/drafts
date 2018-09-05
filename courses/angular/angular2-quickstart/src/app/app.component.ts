import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {  

  books: Object[] = [
    {
      "title" : "As Crônicas de Nárnia",
      "cover": "http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2623167&qld=90&l=430&a=-1",
      "numberOfPages": 530,
      "authorName": "C.S. Lewis"
    },
    {
      "title" : "As Crônicas de Olam",
      "cover": "http://tolkpublicacoes.com.br/wp-content/uploads/2015/03/Olam-Vol1.jpg",
      "numberOfPages": 720,
      "authorName": "L.L. Wurlitzer"
    },
    {
      "title" : "Batman vs Superman",
      "cover": "http://s2.glbimg.com/Ls9nbZ_H65UxMRQK8Rz7Plh0Dbs=/e.glbimg.com/og/ed/f/original/2016/04/20/batman-vs-superman-comic.jpg",
      "numberOfPages": 110,
      "authorName": "John Doe"
    },
  ];


}
