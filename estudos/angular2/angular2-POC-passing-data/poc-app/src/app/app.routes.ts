import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "./formulario/formulario.component";
import { ExibicaoComponent } from "./exibicao/exibicao.component";
import { AppComponent } from "./app.component";

const routes : Routes = [
    { path: "formulario", component: FormularioComponent },
    { path: "exibicao", component: ExibicaoComponent }
];

export const routing = RouterModule.forRoot(routes);