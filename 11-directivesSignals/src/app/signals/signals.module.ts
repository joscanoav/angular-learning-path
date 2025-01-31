import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ],
  exports: [
    SideMenuComponent // Exporta el componente si es necesario
  ]
})
export class SignalsModule { }
