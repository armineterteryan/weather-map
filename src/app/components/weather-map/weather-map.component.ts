import {Component, OnInit} from '@angular/core';
import {WeatherDetails} from "../../models/weather-map/weather-details";
import {WeatherMapService} from "../../services/weather-map.service";

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.css']
})
export class WeatherMapComponent implements OnInit {

  public currentWeatherDetails: WeatherDetails = new WeatherDetails("", "", "",
    0, 0, 0, 0, 0, 0);
  public cityName: string = "Heidenheim";
  public today: number = Date.now();

  constructor(private weatherMapService: WeatherMapService) {
  }

  ngOnInit(): void {
    this.getWeatherMap(this.cityName);
  }

  public getWeatherMap(name: string): void {
    this.weatherMapService.get(name)
      .subscribe(
        data => {
          this.currentWeatherDetails = new WeatherDetails(data.name, data.weather[0].main, data.weather[0].description,
            data.main.temp, data.main.feels_like, data.main.temp_min,
            data.main.temp_max, data.main.pressure, data.main.humidity)
        },
        error => {
          console.log(error);
        });
  }
}
