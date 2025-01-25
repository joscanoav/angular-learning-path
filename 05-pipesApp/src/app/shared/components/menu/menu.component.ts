import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Search', icon: 'pi pi-search' }
      ];
  }

}
