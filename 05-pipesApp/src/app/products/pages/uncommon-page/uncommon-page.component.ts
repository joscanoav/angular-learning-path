import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select

  public name: string = 'Jorge';
  public gender: 'male' | 'female'| 'no existe' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla',

  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }

}
