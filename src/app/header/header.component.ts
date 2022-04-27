import {AfterContentChecked, ChangeDetectorRef, Component} from '@angular/core';
import {CityService} from "../services/city.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentChecked{

  city: any

  constructor( public cityService: CityService, private changeDetector: ChangeDetectorRef ) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
    this.city = this.cityService.currentCity
  }
}
