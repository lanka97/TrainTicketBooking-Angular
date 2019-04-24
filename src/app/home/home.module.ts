import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/components/card/card';


@NgModule({
  declarations: [
    HomeCompComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    CardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
