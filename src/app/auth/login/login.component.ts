import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
emailCheck:any=localStorage.getItem('email');
email = new FormControl('',[Validators.required,Validators.email]);
password=new FormControl('',[Validators.required,Validators.minLength(8)]);   
 remmember=new FormControl('');


  constructor() { }

  ngOnInit(): void {
 
  }

  submit(){
    if (this.remmember) {
      localStorage.setItem('email',this.email.value);
      localStorage.setItem('password',this.password.value); 
      this.emailCheck=localStorage.getItem('email');    

    }    
    }

}
