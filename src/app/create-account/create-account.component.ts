import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  // Should fetch all accounts and display them
  // Form should use transaction service to create a new account
}
