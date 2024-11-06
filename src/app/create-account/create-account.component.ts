import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  constructor(private formBuilder: FormBuilder) {}
  // Should fetch all accounts and display them
  // Form should use transaction service to create a new account
  accountForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    type: ['', [Validators.required]],
    balance: [0, [Validators.required, Validators.min(0)]],
  })

  onSubmit() {
    console.log(this.accountForm.value);
  }
}
