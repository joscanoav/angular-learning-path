import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';



@NgModule({
  exports: [
    MenubarModule,
    MenuModule,
  ]
})

export class PrimeNgModule { }

