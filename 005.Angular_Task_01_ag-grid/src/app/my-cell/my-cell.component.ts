import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community'

@Component({
  selector: 'app-my-cell',
  standalone: true,
  imports: [],
  template: `
    <p>
      <button (click)="onClick($event)">Click Me</button># {{value}}
    </p>
  `,
  styles: ``
})
export class MyCellComponent implements ICellRendererAngularComp {

  value:any;

  agInit(params: ICellRendererParams):void{
    this.value = params.value;
  }

  refresh(params:ICellRendererParams):boolean{
    return false;
  }

  onClick(event:any){
    alert("cell value is" + this.value)
  }
  
}
