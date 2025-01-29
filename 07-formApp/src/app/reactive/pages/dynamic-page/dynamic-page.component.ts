import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',

})
export class DynamicPageComponent {

  // public myForm2 = new FormGroup({
  //   favouriteGames: new FormArray([])
  // });

  public myForm: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  })

  constructor ( private fb: FormBuilder){}

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onSumit():void{
    if ( this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
    this.myForm.reset();
  }

}
