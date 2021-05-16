import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MaterialModule } from '../../../material.module';
import { PostComponent } from './../../posts/post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessageComponent } from './message/message.component';
import { SliderComponent } from './slider/slider.component';
import { PromosComponent } from './promos/promos.component';

import { ProductsComponent } from './products/products.component';
import { NgImageSliderModule } from 'ng-image-slider';
  

@NgModule({
  declarations: [HomeComponent,PostComponent,MessageComponent,SliderComponent,
    PromosComponent,
    ProductsComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgbModule,
    NgImageSliderModule
  ]
})
export class HomeModule { }
