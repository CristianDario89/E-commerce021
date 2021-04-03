import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermasComponent } from './vermas.component';

const routes: Routes = [{ path: '', component: VermasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VermasRoutingModule { }
