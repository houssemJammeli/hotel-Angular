import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { ListChambreComponent } from './list-chambre/list-chambre.component';


@NgModule({
  declarations: [
    AddChambreComponent,
    UpdateChambreComponent,
    ListChambreComponent
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule
  ]
})
export class ChambreModule { }
