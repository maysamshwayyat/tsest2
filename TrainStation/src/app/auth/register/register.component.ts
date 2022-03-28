import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    // address:new FormControl( '',Validators.required),
    firstname:new FormControl( '',Validators.required),
    lastname:new FormControl( '',Validators.required),
    // phoneNumber:new FormControl('')
    gender:new FormControl(''),
    option:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    if(this.registerForm.controls['password'].value==this.registerForm.controls['confirmPassword'].value)
    
      this.registerForm.controls['confirmPassword'].setErrors(null);
      else
      this.registerForm.controls['confirmPassword'].setErrors({mismatch:true});
    
  }

}
