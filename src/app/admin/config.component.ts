import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  TableModel,
  TableHeaderItem,
  TableItem,
} from 'carbon-components-angular';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-no-data-table',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  @ViewChild('optionTemplate', { static: false })
  protected optionTemplate: TemplateRef<any> | undefined;
  name = 'Angular';
  configs: any;
  tableModel = new TableModel();

  constructor(public cityService: CityService) {}
  ngOnInit() {
    this.tableModel.header = [
      new TableHeaderItem({ data: 'Options' }),
      new TableHeaderItem({ data: 'City' }),
      new TableHeaderItem({ data: 'Units' }),
      new TableHeaderItem({ data: 'Interval' }),
    ];

    this.configs = this.cityService.getCities().subscribe((data) => {
      data.data.reduce((acc: any, el: any, index: any) => {
        acc.push([
          new TableItem({
            data: [el.config_id, index],
            template: this.optionTemplate,
          }),
          new TableItem({ data: el.city_name }),
          new TableItem({ data: el.units }),
          new TableItem({ data: el.interval }),
        ]);
        this.tableModel.data = acc;
        return acc;
      }, []);
    });
  }

  deleteCity(data: any) {
    console.log(data);
    this.cityService.deleteCity(data[0]).subscribe(() => {
      this.tableModel.deleteRow(data[1]);
    });
  }
}
