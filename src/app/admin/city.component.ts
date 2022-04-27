import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from "../services/city.service";

@Component({
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})

export class CityComponent implements OnInit{
  cityForm: any
  private city: any


  constructor (public cityService: CityService){
  }
  currentCity= this.cityService.currentCity

  ngOnInit(): void {
    this.city = new FormControl('',[Validators.required, Validators.pattern('[A-Za-z]+')])
    this.cityForm = new FormGroup({
      city: this.city,
    })
  }

  get _city() {
    return this.cityForm.get('city')
  }


  updateCity(formValues: any){
    this.cityService.updateCurrentCity(formValues.city)
    this.currentCity=formValues.city
    this.cityForm.reset()
  }

}
