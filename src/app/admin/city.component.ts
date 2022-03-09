import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: './city.component.html'
})

export class CityComponent {

  constructor (private router: Router){

  }

  // login(formValues){
  //   this.authService.loginUser(formValues.userName, formValues.password)
  //   this.router.navigate(['events'])
  // }
  //
  // cancel(){
  //   this.router.navigate(['events'])
  // }
}
