import { NgModule } from '@angular/core';
import { LogoEeaComponent } from './logo-eea/logo-eea';
import { LogoMpcComponent } from './logo-mpc/logo-mpc';

@NgModule({
	declarations: [LogoEeaComponent,
    LogoMpcComponent],
	imports: [],
	exports: [LogoEeaComponent,
    LogoMpcComponent]
})
export class ComponentsModule {}
