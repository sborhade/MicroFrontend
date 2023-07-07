import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent {
  onSubmit(): void {
    // Handle form submission logic here, such as sending payment details to a server or performing client-side validation.
    console.log('Payment submitted');
  }
}
