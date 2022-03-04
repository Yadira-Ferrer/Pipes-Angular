import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'yadira';
  nombreUpper: string = 'YADIRA';
  nombreCompleto: string = 'yAdiRa feRreR';

  fecha: Date = new Date(); // El día de hoy...

}
