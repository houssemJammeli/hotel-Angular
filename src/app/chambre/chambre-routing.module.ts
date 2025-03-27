import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChambreComponent } from './add-chambre/add-chambre.component'
import { UpdateChambreComponent } from './update-chambre/update-chambre.component'
import { ListChambreComponent } from './list-chambre/list-chambre.component'



const routes: Routes = [
  { path: 'add', component: AddChambreComponent },
  { path: 'update/:id', component: UpdateChambreComponent },
  { path: 'list', component: ListChambreComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
