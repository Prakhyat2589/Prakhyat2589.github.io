import { Component, OnInit } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
// import { catchError } from 'rxjs/operators'
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-livedata',
  templateUrl: './livedata.component.html',
  styleUrls: ['./livedata.component.css']
})
export class LivedataComponent implements OnInit {
  settings: WeatherSettings = {
    location: {
      cityName: 'Szczecin'
    },
    backgroundColor: '#347c57',
    color: '#ffffff',
    width: '300px',
    height: 'auto',
    showWind: false,
    scale: TemperatureScale.CELCIUS,
    forecastMode: ForecastMode.DETAILED,
    showDetails: false,
    showForecast: true,
    layout: WeatherLayout.WIDE,
    language: 'en'
  };




  constructor() { }

  ngOnInit() {
  }

}
