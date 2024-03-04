import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef,CellClickedEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { MyCellComponent } from './my-cell/my-cell.component';
import { MyCustomComponent } from './my-custom/my-custom.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AgGridAngular,MyCellComponent,MyCustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g-grid';
  cellClickData = "";

  // Row Data: The data to be displayed.
  rowData = [
    { "name": "iPhone 13", "price": 999, "featured": true, "rating": 4.8, "company": "apple" },
    { "name": "Samsung Galaxy S21", "price": 799, "featured": true, "rating": 4.7, "company": "samsung" },
    { "name": "Dell XPS 15", "price": 1499, "featured": true, "rating": 4.9, "company": "dell" },
    { "name": "Xiaomi Redmi Note 11", "price": 299, "featured": false, "rating": 4.5, "company": "mi" },
    { "name": "iPad Air", "price": 599, "featured": true, "rating": 4.6, "company": "apple" },
    { "name": "Samsung Galaxy Tab S7", "price": 649, "featured": true, "rating": 4.6, "company": "samsung" },
    { "name": "Dell Inspiron 15", "price": 899, "featured": false, "rating": 4.7, "company": "dell" },
    { "name": "Xiaomi Mi 11 Lite", "price": 349, "featured": true, "rating": 4.3, "company": "mi" },
    { "name": "MacBook Pro", "price": 1299, "featured": true, "rating": 4.8, "company": "apple" },
    { "name": "Samsung Odyssey G7", "price": 699, "featured": true, "rating": 4.8, "company": "samsung" },
    { "name": "Dell Alienware Aurora", "price": 2299, "featured": true, "rating": 4.9, "company": "dell" },
    { "name": "Xiaomi Poco X3", "price": 249, "featured": false, "rating": 4.4, "company": "mi" },
    { "name": "AirPods Pro", "price": 249, "featured": true, "rating": 4.7, "company": "apple" },
    { "name": "Samsung Galaxy Watch 4", "price": 249, "featured": true, "rating": 4.6, "company": "samsung" },
    { "name": "Dell UltraSharp U2720Q", "price": 549, "featured": true, "rating": 4.8, "company": "dell" },
    { "name": "Xiaomi Mi Band 6", "price": 49, "featured": true, "rating": 4.5, "company": "mi" },
    { "name": "HomePod Mini", "price": 99, "featured": true, "rating": 4.6, "company": "apple" },
    { "name": "Samsung Galaxy Buds Pro", "price": 199, "featured": true, "rating": 4.7, "company": "samsung" },
    { "name": "Dell Latitude 15", "price": 1199, "featured": true, "rating": 4.7, "company": "dell" },
    { "name": "Xiaomi Mi 10T Pro", "price": 499, "featured": true, "rating": 4.5, "company": "mi" }
  ];

  defaultColDef:ColDef = {
    sortable:true, filter:true, editable:true
  }

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "name",  cellRenderer:MyCellComponent },
    { field: "price" },
    { field: "featured"},
    { field: "rating" },
    { field: "company"}
  ];

  onCellClicked(event:CellClickedEvent){
    console.log(event);
    this.cellClickData = event.data ;
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  clearSelection(){
    this.agGrid.api.deselectAll();
  }

}
