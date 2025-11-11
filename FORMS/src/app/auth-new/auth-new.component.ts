import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

function 
  
   containQuestionMark(control:AbstractControl){
  if(control.value.includes('?')){
    return null;
  }  

  return {test:true}
}

@Component({
  selector: 'app-auth-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-new.component.html',
  styleUrl: './auth-new.component.css'
})



export class AuthNewComponent  implements OnInit {

private destroyRef=inject(DestroyRef)

form=new FormGroup({
    email:new FormControl('',{
      validators:[Validators.email,Validators.required]
    }),
    password : new FormControl('',{
      validators:[Validators.required,Validators.maxLength(6),containQuestionMark]
    })
  });

  get getEmailIsvalid(){
    return this.form.controls.email.touched 
           && this.form.controls.email.dirty
           && this.form.controls.email.invalid
  }

  get getPasswordIsvalid(){
    return this.form.controls.password.touched 
           && this.form.controls.password.dirty
           && this.form.controls.password.invalid
  }

  ngOnInit(): void {

    const savedEmail=window.localStorage.getItem('Test')

    if(savedEmail){
      const loadEmail=JSON.parse(savedEmail);
      this.form.patchValue({email:loadEmail.email})
    }

    const subscription=this.form.valueChanges.subscribe({
      next:value => {
        window.localStorage.setItem("Test",JSON.stringify({"email":value.email}))
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }

  onSubmit(){
    const email=this.form.value.email;
    const password=this.form.value.password;

    console.log(email,password);
  }
}
