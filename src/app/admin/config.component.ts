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
  open: boolean = false;
  deleteData: any = [];

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
            data: [el.config_id, index, el.city_name],
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

  openModal(data: any) {
    this.open = true;
    this.deleteData = data;
  }

  closeModal() {
    this.open = false;
  }

  deleteCity() {
    this.open = false;
    this.cityService.deleteCity(this.deleteData[0]).subscribe(() => {
      this.tableModel.deleteRow(this.deleteData[1]);
    });
  }
}
