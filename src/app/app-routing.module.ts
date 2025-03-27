import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chambres', loadChildren: () => import('./chambre/chambre.module').then(m => m.ChambreModule) },
  { path: '**', redirectTo: 'chambres/list' } // Redirection par défaut

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
