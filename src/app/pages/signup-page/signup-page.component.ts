import { Component } from '@angular/core';
import { AccountService } from '../../account/shared/account.service';

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

  constructor(private accountService: AccountService) { }

  ngOnInit(){

  }

  async onSubmit(){
    try{
      const result = await this.accountService.createAccount(this.account);

      console.log(result);
    } catch (error){
        console.log(error);
    }
  }

}
