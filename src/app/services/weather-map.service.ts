import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class WeatherMapService {

  baseUrl: string = Constants.baseUrl;
  appid: string = Constants.appid;
  units: string = Constants.units;

  constructor(private http: HttpClient) {
  }

  get(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/?q=${name}&appid=${this.appid}&units=${this.units}`);
  }
}
