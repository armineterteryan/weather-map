import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const appid = '81a55167e2500308e5ec3496620e76e8';
const units = 'metric';

@Injectable({
  providedIn: 'root'
})
export class WeatherMapService {

  constructor(private http: HttpClient) {
  }

  get(name: string): Observable<any> {
    return this.http.get(`${baseUrl}/?q=${name}&appid=${appid}&units=${units}`);
  }

}
