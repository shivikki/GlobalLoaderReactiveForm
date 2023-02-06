import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public formContent={
    email:'',
    pwd:''
  }

  public hasError=false;
  public emailError=false;
  public regex=/[a-zA-Z0-9.]*@[a-z]*[.]{1}com/
  constructor() { }

  ngOnInit(): void {
  }

  validateForm(loginForm: any){
    
    this.hasError=(loginForm.form.status=='INVALID')?true:false;
    this.emailError=!this.regex.test(loginForm.form.value.email)
    console.log("this.hasError",this.hasError)
    console.log("data",loginForm.form);
    console.log("validate email",this.regex.test(loginForm.form.value.email));//if valid pattern then true


    //required validations 
    //email regex should match [A-Za-z0-9]@[a-z].[com] + required
    //pwd min 5 chars + max 10 chars +required
  }
}
