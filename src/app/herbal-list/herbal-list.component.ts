import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { MatTableDataSource} from '@angular/material';
import { MatSort} from '@angular/material';
import { MatSortable } from '@angular/material';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";


@Component({
  selector: 'app-herbal-list',
  templateUrl: './herbal-list.component.html',
  styleUrls: ['./herbal-list.component.scss']
})
export class HerbalListComponent implements OnInit {
  @Input() filteredData: string;
  public data;
  columnsToDisplay = ['id', 'name', 'price', 'edit'];
  constructor(
    private _dataService: DataService,
    private dialog: MatDialog
  ) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

ngOnInit() {
  this._dataService.getData().subscribe(data => {
    if (!data) {
      return;
    }
    this.data = new MatTableDataSource(data);
    this.data.sort = this.sort;
  });
}


  ngOnChanges() {
    if (!this.filteredData) {
      return;
    }
    this.data.filter = this.filteredData.trim().toLowerCase();
  }

    openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );    
  }
}
