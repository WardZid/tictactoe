import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: '<button>{{ value }}</button>',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent {

  @Input() value:string ="";

}