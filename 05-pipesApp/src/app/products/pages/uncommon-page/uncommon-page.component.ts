import { Component } from '@angular/core';
import { Person } from '../../../../../../01-typescript-intro/src/topics/08-Classes';

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

  // i18nPlural
  public clients: string[]=['Maria', 'Eduardo', 'Elizabeth','Cristan','Matias']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # ningun clientes esperando.',
  }
  deleteClient(): void{
    this.clients.shift()
  }

  //KeyValue Pipe

  public person = {
    name: ' Jorge',
    age: 38,
    address: ' Guadalajara, España'

  }

}
