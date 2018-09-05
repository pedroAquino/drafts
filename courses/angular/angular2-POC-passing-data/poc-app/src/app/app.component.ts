import { Component } from '@angular/core';
import { DadosService } from './dados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DadosService ]
})
export class AppComponent {
  title = 'app works!';
}
