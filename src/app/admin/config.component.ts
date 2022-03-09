// import { Component, Input } from "@angular/core";
// import { Router } from "@angular/router";
//
// import {TableModel, TableRowSize} from "carbon-components-angular";
//
// @Component({
//   selector: "app-no-data-table",
//   templateUrl: './config.component.html'
// })
//
// export class ConfigComponent {
//   @Input() model: TableModel = new TableModel();
//   @Input() size: TableRowSize = "md";
//
//   constructor (private router: Router){
//
//   }
//
//   login(formValues){
//     this.authService.loginUser(formValues.userName, formValues.password)
//     this.router.navigate(['events'])
//   }
//
//   cancel(){
//     this.router.navigate(['events'])
//   }
//
// }

import { Component, OnInit } from "@angular/core";
import {
  TableModel,
  TableHeaderItem,
  TableItem
} from "carbon-components-angular";

  @Component({
    selector: "app-no-data-table",
    templateUrl: './config.component.html'
  })

export class ConfigComponent implements OnInit {
  name = "Angular";
  tableModel = new TableModel();

  constructor() {}
  ngOnInit() {
    this.tableModel.header = [
      new TableHeaderItem({ data: "Description"}),
      new TableHeaderItem({ data: "Temperature"}),
      new TableHeaderItem({ data: "Feels like"}),
      new TableHeaderItem({ data: "Wind speed"}),
      new TableHeaderItem({ data: "Pressure"}),
      new TableHeaderItem({ data: "Humidity"}),
    ];

    this.tableModel.data = [
      [ new TableItem({ data: "Name 1" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" }),
      ],

      [ new TableItem({ data: "Name 1" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" }),
        new TableItem({ data: "AAA" })
    ]
    ]

  }

}


