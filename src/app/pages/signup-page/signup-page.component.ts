import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  account = {
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  };

  constructor() { }

  ngOnInit(){

  }

  onSubmit(){
    
  }

}
