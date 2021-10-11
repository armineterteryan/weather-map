export class WeatherDetails {
  cityName: string;
  main?: string;
  description?: string;
  temp?: number;
  feelsLike?: number;
  tempMin?: number;
  tempMax?: number;
  pressure?: number;
  humidity?: number

 public constructor(cityName: string, main: string, description: string, temp: number, feelsLike: number,
              tempMin: number, tempMax: number, pressure: number, humidity: number) {
      this.cityName = cityName;
      this.main = main;
      this.description = description;
      this.temp = temp;
      this.feelsLike = feelsLike;
      this.tempMin = tempMin;
      this.tempMax = tempMax;
      this.pressure = pressure;
      this.humidity = humidity;
  }
}
