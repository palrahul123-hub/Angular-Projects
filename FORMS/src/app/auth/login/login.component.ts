import { JsonPipe } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, input, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private form=viewChild<NgForm>("formLogin")
  private destroyRef=inject(DestroyRef);
  constructor(){
    afterNextRender(() => {

      const SavedForm=window.localStorage.getItem("email");

      if(SavedForm){
        const loadFormData=JSON.parse(SavedForm);
        const savedEmail=loadFormData.email;
        setTimeout(() => {
            this.form()?.setValue({"email":savedEmail,"password":""});
        },1)
        
      }

      const subscription = this.form()?.valueChanges?.pipe(debounceTime(500)).subscribe({
      next:(value) => window.localStorage.setItem('email',JSON.stringify({email : value.email}))
      
    })

    this.destroyRef.onDestroy(() => {
      subscription?.unsubscribe();
    })
    });
    
  }

  onSubmit(formData:NgForm){

    if (formData.form.invalid){
        return;
    }  

 const email = formData.form.value.email;
 const password = formData.form.value.password;

 formData.form.reset();
  }
}
