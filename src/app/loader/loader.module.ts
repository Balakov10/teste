import { TempCardComponent } from './../components/temp-card/temp-card.component';

import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPageRoutingModule } from './loader-routing.module';

import { LoaderPage } from './loader.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageRoutingModule,
    SwiperModule,
    HttpClientModule,

  ],
  declarations: [LoaderPage, TempCardComponent]
})
export class LoaderPageModule {}
