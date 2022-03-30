import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})

export class CityComponent {

  constructor (private router: Router){

  }

  city = new FormControl('');

  // login(formValues){
  //   this.authService.loginUser(formValues.userName, formValues.password)
  //   this.router.navigate(['events'])
  // }
  //
  // cancel(){
  //   this.router.navigate(['events'])
  // }
}
