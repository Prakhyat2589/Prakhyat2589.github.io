import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, RatingModule } from 'ngx-bootstrap';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MapsComponent } from './component/maps/maps.component';
import { LivedataComponent } from './component/livedata/livedata.component';
//import { GetList } from './services/getlist_service';
import { GetList1 } from './services/getlist-service1.service';
import { ServiceComponent } from './component/service/service.component';


@NgModule({
  declarations: [ AppComponent, HomeComponent, MapsComponent, LivedataComponent, ServiceComponent ],
  imports: [
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule.forRoot([
       {path:'', component: HomeComponent},
       {path:'maps', component: MapsComponent},
       {path:'weatherdata', component: LivedataComponent},
       {path:'service', component: ServiceComponent}
     ]),
     CarouselModule.forRoot(),
     RatingModule.forRoot(),
     CommonModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdypBi_1Eqr6J3E-dHp4xVVd530j4pDm0',
      libraries: ["places, geometry"]
      }),
      AngularWeatherWidgetModule.forRoot({
        key: '6cfb2f935f8715c025ce442566c50871',
        name: WeatherApiName.OPEN_WEATHER_MAP,
        baseUrl: 'http://api.openweathermap.org/data/2.5'
      })
   ],
  //Service is defined in the providers 
  providers: [GetList1],
  bootstrap: [AppComponent]
})
export class AppModule { }
