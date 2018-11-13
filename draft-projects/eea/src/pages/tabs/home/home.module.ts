import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
    declarations: [ HomePage ],
    imports: [
        IonicModule.forRoot(HomePage)
    ],
    bootstrap: [],
    entryComponents: [ HomePage ],
    providers: []
})
export class HomeModule {

}