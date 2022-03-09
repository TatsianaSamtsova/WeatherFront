import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'current-weather',
  templateUrl: "./current-weather.component.html",
  styleUrls: ['./current-weather.component.scss']
})


export class CurrentWeatherComponent implements OnInit {
  currentDateTime: Date | undefined

  ngOnInit() {
    this.currentDateTime = new Date()
  }
}
