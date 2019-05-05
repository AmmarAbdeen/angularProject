import { Component} from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent {

 form = new FormGroup({
   email : new FormControl('',[Validators.required,Validators.email]),
   password : new FormControl('',[Validators.required,Validators.minLength(8)])
 })
 get email(){
   return this.form.get('email');
 }
 get password(){
  return this.form.get('password');
}
 
}
