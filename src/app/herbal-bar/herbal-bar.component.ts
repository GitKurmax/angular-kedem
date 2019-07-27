import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-herbal-bar',
  templateUrl: './herbal-bar.component.html',
  styleUrls: ['./herbal-bar.component.scss']
})
export class HerbalBarComponent implements OnInit {
  filtered: string;
  @Output() inputData: EventEmitter<string> = new EventEmitter();
  constructor() { }

  applyFilter(filterValue: string) {
    this.filtered = filterValue;
    this.inputData.emit(this.filtered);
  }
  
  ngOnInit() {
  }

}
