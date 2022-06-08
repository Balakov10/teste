import { environment } from './../../environments/environment';
import { Component,AfterContentChecked, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import {HttpClient} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// import Swiper core and required modules
import SwiperCore, { Pagination, Swiper, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;


@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderPage implements OnInit {

  @ViewChild('swiper') swiper: SwiperComponent;

  public swiperConfig: SwiperOptions = {
    pagination: true,
  };
  weatherCity: any;
  weatherTemp: any;
  lat;
  lon;

  constructor(public httpClient: HttpClient, private geo: Geolocation) {
    this.weatherTemp=[];
    this.loadData();

  }

  ngOnInit() {
    Swiper.use([Pagination]);

  }




  loadData(){

    this.geo.getCurrentPosition({timeout: 1000,enableHighAccuracy: true}).then((res)=>{

      this.httpClient.get(`${apiUrl}/forecast?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=${apiKey}`).subscribe
      (resultado => {
        this.weatherCity = resultado['city'];
        this.weatherTemp = resultado['list'];
        console.log(this.weatherTemp);
        console.log(this.weatherCity);
      });

    });
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterContentChecked(){
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }


}
