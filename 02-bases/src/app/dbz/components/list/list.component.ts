/* ng g component dbz/components/list */
import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[]= [{
    name: "Trunks",
    power: 10

  }]

}
