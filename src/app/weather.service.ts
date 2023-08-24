import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

    getwearther() {
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Torino&appid=575dc63b20c73b796037d569d4a580f2&units=metric');
    }

}
