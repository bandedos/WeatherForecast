import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    console.log(this.weatherService.getWeatherForecastForCity('Maribor'));
  }
}
