/* 1-install MDB via npm
       npm i angular-bootstrap-md --save
   2- to app.module.ts add
       imports: [ MDBBootstrapModule ]
       src for add bootstrap-md  ="https://www.npmjs.com/package/angular-bootstrap-md"
   3-src for code="https://mdbootstrap.com/docs/angular/tables/basic/"
**/
import {Component, HostListener, ViewChild} from '@angular/core';

import {MdbTableDirective} from "angular-bootstrap-md";
 
@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle'];

  searchText: string = '';
  previous: string;

  constructor() { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.elements.push({ id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i });
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}
