import { Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from "../services/city.service";

@Component({
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})

export class CityComponent implements OnInit{
  cityForm: any
  private city: any
  item: any
  items: any


  constructor (public cityService: CityService){
  }
  currentCity= this.cityService.currentCity
  isLoading = false;
  overlay = false;

  ngOnInit(): void {
    this.city = new FormControl('',[Validators.required, Validators.pattern('[A-Za-z]+')])
    this.cityForm = new FormGroup({
      city: this.city,
    })
    this.item = this.cityService.getCities().subscribe((data) => {
      data.data.reduce((acc:any,el:any)=>{
        acc.push({content:el.city_name})
        this.items = acc
        return acc
      },[])
    })
  }




  onSubmit(formValues: any){
    this.isLoading = true;
    this.overlay = true;

    setTimeout(() => {
      this.isLoading = false;
      this.overlay = false;
    }, 1000);

    this.cityService.updateCurrentCity(formValues.city)
    this.currentCity=formValues.city
    this.cityForm.reset()
  }

  isInvalid(): boolean {
    const control = this.cityForm.get('city');

    return control && control.invalid && (control.dirty || control.touched) && control.errors?.pattern;
  }

  selected(event: any) {
    this.cityService.updateCurrentCity(event.item.content)
    this.currentCity=event.item.content
  }
}
