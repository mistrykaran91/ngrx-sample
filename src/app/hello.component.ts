import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
   <mat-toolbar color="primary" >
    <span>Tire fitment engine</span>
  </mat-toolbar>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
