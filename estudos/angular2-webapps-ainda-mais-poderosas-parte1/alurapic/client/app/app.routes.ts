import { RouterModule, Routes } from "@angular/router"
import { CadastroComponent } from "./cadastro/cadastro.component"
import { ListagemComponent } from "./listagem/listagem.component"

const routes : Routes = [
    { path: "", component: ListagemComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: "**", component: ListagemComponent }
];

export const routing = RouterModule.forRoot(routes);
