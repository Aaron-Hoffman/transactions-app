import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: false,
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() accountType: string = "";
  @Input() valid: boolean = false;
  @Input() label: string = "Submit";
}
