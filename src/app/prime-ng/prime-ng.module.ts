import { NgModule } from '@angular/core';

// PrimeNG (ordenar de forma alfabetica)
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }

/* Este módulo solo sirve para exportar los módulos que necesitamos de primeNg */
