import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';

import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ] 
})
export class ClientesModule { }
