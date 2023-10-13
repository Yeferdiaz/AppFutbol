import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/utilidades/home/home.component";
import { PageMesiComponent } from "./components/utilidades/page-mesi/page-mesi.component";
import { PageJamesComponent } from "./components/utilidades/page-james/page-james.component";
import { PageRonaldoComponent } from "./components/utilidades/page-ronaldo/page-ronaldo.component";


const APP_ROUTES: Routes =[

    {path: 'home', component: HomeComponent},
    {path: 'pagemesi', component:PageMesiComponent},
    {path: 'pagejames', component: PageJamesComponent},
    {path: 'pageronaldo', component:PageRonaldoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

] 
;
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});