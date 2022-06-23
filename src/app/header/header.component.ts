import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as admin from '../store/admin-store/admin.selectors';
import {
  changeCityAction,
  getConfigAction,
} from '../store/admin-store/admin.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  city$: Observable<any> = this.store$.select(admin.getCurrentCity);
  config$: Observable<any> = this.store$.select(admin.getCurrentConfig);
  open: boolean = false;
  // item: any;
  items: any;

  constructor(
    public configService: ConfigService,
    private readonly store$: Store
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(getConfigAction());
    this.config$.subscribe((data) => {
      this.items = data.map((el: any) => {
        return { content: el.city_name };
      });
    });

    // this.item = this.configService.getCities().subscribe((data) => {
    //   this.items = data.data.map((el: any) => {
    //     return { content: el.city_name };
    //   });
    // });
  }

  selected(event: any) {
    this.store$.dispatch(changeCityAction({ city: event.item.content }));
    // this.configService.updateCurrentCity(event.item.content);
    // this.city = event.item.content;
  }

  closeModal() {
    this.open = false;
  }
}
