import { Component } from '@angular/core';
import { Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

public heroForm = new FormGroup({
  id: new FormControl<string>(''),
  superhero: new FormControl<string>('',{ }),
  publisher: new FormControl<Publisher>(Publisher.DCComics),
  alter_ego: new FormControl(''),
  first_appearance: new FormControl(''),
  characters: new FormControl(''),
  alt_img: new FormControl(''),
});

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ];

  constructor ( private heroesService: HeroesService ){}

  onSubmit():void{
    console.log({
    forIsValid: this.heroForm.valid,
    valur: this.heroForm.value,

  })
}

}
