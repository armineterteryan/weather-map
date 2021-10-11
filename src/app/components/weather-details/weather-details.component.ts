import {Component, Input, OnInit} from '@angular/core';
import {WeatherDetails} from "../../models/weather-map/weather-details";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() weatherDetails: WeatherDetails = new WeatherDetails("", "", "", 0, 0,
    0, 0, 0, 0);
  @Input() str: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }
}
