import { Component, Injectable, ViewChild } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { DATA } from "./financialData";



@Component({
    selector: "grid-sample",
    styleUrls: ["./grid-selection.component.scss"],
    templateUrl: "grid-selection.component.html"
})

export class GridSelectionSampleComponent {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    public data: any[];
    public selection = true;
    constructor() {
        this.data = DATA;
    }
    public ngOnInit(): void {
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.grid1.deselectAllRows();
            this.grid1.selectRows([targetCell.row.rowID]);
        }
    }
    placeCheckBox(ind, priority) {
      console.log('Priority: ' + priority);
      console.log('Index:' + ind);
      let i = 0;
      for ( const item of this.data) {
        if (item['Priority'] === priority) {
          if (i === ind) {
            return true;
          }
            return false;
        }
        i++;
      }
    }
}
