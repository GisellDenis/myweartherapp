import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
   this.weatherService.getwearther().subscribe({

    next: (res)=>{
      console.log(res)
    },

    error: (error) => console.log(error.message),

    complete: () => console.info('API call completed')
    })
   }

}
