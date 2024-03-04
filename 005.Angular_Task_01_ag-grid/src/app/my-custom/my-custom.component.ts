import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';import { ICellRendererParams } from 'ag-grid-community';


@Component({
  selector: 'app-my-custom',
  standalone: true,
  imports: [],
  template: `
    <p>
      my-custom works!
    </p>
  `,
  styles: ``
})
export class MyCustomComponent implements ICellRendererAngularComp {

  agInit(params: ICellRendererParams<any, any, any>): void {
      
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
      // Return false if your renderer will not provide a different result if run again.
      return false;
  }
  
}
