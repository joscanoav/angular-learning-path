/* ng g component dbz/components/list */
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  }];

  //onDeleted = index value : number
  @Output()
  public onDelete: EventEmitter<number>  = new EventEmitter();

  onDeleteCharacter(index: number): void{
    this.onDelete.emit(index);
  }

}
