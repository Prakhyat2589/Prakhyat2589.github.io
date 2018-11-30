import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, RatingModule } from 'ngx-bootstrap';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MapsComponent } from './component/maps/maps.component';
import { LivedataComponent } from './component/livedata/livedata.component';
import { GetList1 } from './services/getlist-service1.service';
import { ServiceComponent } from './component/service/service.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { ProfileEditorComponent } from './component/reactive-forms/sub-forms/profile-editor/profile-editor.component';
import { NameEditorComponent } from './component/reactive-forms/sub-forms/name-editor/name-editor.component';
import { LoginComponent } from './component/authentication-forms/login/login.component';
import { AuthGuard } from './component/authentication-forms/guard/guard';
import { RegistrationComponent } from './component/authentication-forms/registration/registration.component';
import { AlertService, AuthenticationService, UserService } from './component/authentication-forms/services/index';
import { JwtInterceptor, fakeBackendProvider } from './component/authentication-forms/helpers/index';
import { AlertComponent } from './component/authentication-forms/message/alert.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';



@NgModule({
  declarations: [ AppComponent, HomeComponent, MapsComponent, LivedataComponent, ServiceComponent, ReactiveFormsComponent, ProfileEditorComponent, NameEditorComponent, LoginComponent, AlertComponent, RegistrationComponent, ShoppingCartComponent, ProductdetailsComponent],
  imports: [
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule.forRoot([
       {path:'', component: HomeComponent},
       {path:'maps', component: MapsComponent},
       {path:'weatherdata', component: LivedataComponent},
       {path:'service', component: ServiceComponent},
       {path:'reactive-forms', component: ReactiveFormsComponent},
       {path: 'login', component: LoginComponent },
       {path: 'register', component: RegistrationComponent },
       {path: 'shopping-cart', component: ShoppingCartComponent },
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
  providers: [GetList1,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  // provider used to create fake backend
  fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
