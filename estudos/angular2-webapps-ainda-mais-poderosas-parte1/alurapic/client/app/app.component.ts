import { Component } from '@angular/core'
import { Http } from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    
    fotos: Object[];

    constructor(http : Http) {

        let result = http.get('/v1/fotos');
        result.subscribe(response => {
            this.fotos = response.json();
            console.log(this.fotos);
        })

    }

}