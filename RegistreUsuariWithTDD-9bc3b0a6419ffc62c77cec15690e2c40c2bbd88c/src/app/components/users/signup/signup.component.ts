import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../model/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private _repeatPassword!:string;
  private _user:User = new User();

  get user():User { return this._user;}
  get repeatPassword():string { return this._repeatPassword; }
  set repeatPassword(repeatPassword:string) { this._repeatPassword=repeatPassword;}
  

}
