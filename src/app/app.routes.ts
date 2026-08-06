import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Horaires } from './pages/horaires/horaires';
import { Lignes } from './pages/lignes/lignes';
import { Tarifs } from './pages/tarifs/tarifs';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';

export const routes: Routes = [
    { path: 'accueil', component: Accueil },
    { path: 'horaires', component: Horaires },
    { path: 'lignes', component: Lignes },
    { path: 'tarifs', component: Tarifs },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: Pagenotfound }
];
