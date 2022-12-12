import {Injectable} from '@angular/core';
import {WeatherForecastModel} from '../models/weather-forecast.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  /**
   * TODO Get weather forecast data from the following API:
   * Example: https://www.weatherapi.com/api-explorer.aspx#forecast
   * API key: a83bd642f1ce4fd88a494018221212
   **/
  getWeatherForecastForCity(cityName: string): WeatherForecastModel {
    return new WeatherForecastModel(cityName);
  }
}
