import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // para i18nSelect
  nombre: string = 'Gabriel';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // para i18nPlural
  clientes: string[] = ['Carlota', 'Javier', 'Sofia', 'Lucia', 'Carlos'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if ( this.genero === 'masculino' ) {
      this.nombre = 'Karla';
      this.genero = 'femenino';
    } else {
      this.nombre = 'David';
      this.genero = 'masculino';
    }
  }

  eliminarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona =  {
    nombre: 'Yadira',
    edad: 27,
    direccion: 'Guatemala, Guatemala'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,...,1000

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
