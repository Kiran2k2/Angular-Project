import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

router=inject(Router)

  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/) 
    ])
  });

  onSubmit() {
    if (this.signupForm.valid) {
      
      alert('Form Submitted')
      this.router.navigateByUrl('/login')
      this.signupForm.reset()
      console.log('Form Submitted:', this.signupForm.value);
    } else {
      alert('Please fill in the form correctly');
    }
  }

  onClick(){
    this.router.navigateByUrl('/login')
  }
}
