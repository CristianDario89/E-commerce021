import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../../material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,NgbModule,
    AdminRoutingModule, MaterialModule
  ] 
})
export class AdminModule { }
