import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'jorge';
  public nameUpper: string = 'OSCANOA';
  public fullName: string = 'jOrGe OsCanOa'

}
