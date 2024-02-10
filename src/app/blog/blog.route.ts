import { Route } from "@angular/router";
import { DocsComponent } from "./docs/docs.component";

export default [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
    },
    {
        path: 'about',
        loadComponent:()=> import('./about/about.component').then((c)=>c.AboutComponent)
    },
    {
        path: 'docs',
        component: DocsComponent
    },
    {
        path: '',
        redirectTo: '/home', pathMatch: "full"
    }
] as Route[]