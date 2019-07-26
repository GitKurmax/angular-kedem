import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-herbal-list',
  templateUrl: './herbal-list.component.html',
  styleUrls: ['./herbal-list.component.scss']
})
export class HerbalListComponent implements OnInit {
  public data = [];
  constructor(private _dataService: DataService) { }

 toggleStyle(elem) {
   elem.parentNode.classList.toggle('selected');
 }

sort(elem) {
  console.log(elem.dataset.value);
}

  ngOnInit() {
    this._dataService.getData().subscribe(data => this.data = data);
  }

}
