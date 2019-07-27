import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataService } from 'src/services/data.service';
import {MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material';
import {MatSortable} from '@angular/material';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-herbal-list',
  templateUrl: './herbal-list.component.html',
  styleUrls: ['./herbal-list.component.scss']
})
export class HerbalListComponent implements OnInit {
  @Input() filteredData: string;
  public data;
  columnsToDisplay = ['id', 'name', 'price'];
  constructor(private _dataService: DataService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

// toggleStyle(elem) {
//   elem.parentNode.classList.toggle('selected');
// }

  ngOnChanges() {
    if (!this.filteredData) {
      return;
    }
    this.data.filter = this.filteredData.trim().toLowerCase();
  }

  ngOnInit() {
    this._dataService.getData().subscribe(data => {
      if (!data) {
        return;
      }
      this.data = new MatTableDataSource(data);
      this.data.sort = this.sort;
    });
  }
}
