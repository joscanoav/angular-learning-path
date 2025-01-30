import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoiam9zY2Fub2F2IiwiYSI6ImNtNmpuemwzYjAwejQycXF1OW41b3o0YzQifQ.l8YcbaUIu2WjqKAU-bTKhw';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPagesComponent } from './pages/markers-pages/markers-pages.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';
import { ZoomRangePagesComponent } from './pages/zoom-range-pages/zoom-range-pages.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPagesComponent,
    PropertiesPagesComponent,
    ZoomRangePagesComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
