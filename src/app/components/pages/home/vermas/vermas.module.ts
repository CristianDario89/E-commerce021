import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VermasRoutingModule } from './vermas-routing.module';
import { VermasComponent } from './vermas.component';

import { MaterialModule } from '../../../../material.module'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GalleComponent } from './galle/galle.component';
import { JsonInfoComponent } from './json-info/json-info.component';
import { SaladasComponent } from './saladas/saladas.component';

import { JsonInfoService } from './../../../../shared/services/json-info.service';

@NgModule({
  declarations: [VermasComponent,GalleComponent,
    JsonInfoComponent,
    SaladasComponent],
  imports: [
    CommonModule, HttpClientModule,
    VermasRoutingModule,NgbModule,MaterialModule
  ],
   providers:[JsonInfoService]
})
export class VermasModule { }
