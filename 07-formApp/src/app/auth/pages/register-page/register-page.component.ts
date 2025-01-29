import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
//import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

   public myForm: FormGroup = this.fb.group({
    name:['',[ Validators.required, Validators.pattern(this.ValidatorsService.firstNameAndLastnamePattern) ]],
    email:['',[ Validators.required, Validators.pattern(this.ValidatorsService.emailPattern)]],
    username:['',[ Validators.required, this.ValidatorsService.cantBeStrider ]],
    password:['',[ Validators.required, Validators.minLength(6)]],
    password2:['',[ Validators.required ]],

   });

   constructor (
    private fb: FormBuilder,
    private ValidatorsService: ValidatorsService
  ){}

   isValidField (field: string){
    return this.ValidatorsService.isValidField( this.myForm, field)
  }

   onSubmit(){
    this.myForm.markAllAsTouched();
   }


}
