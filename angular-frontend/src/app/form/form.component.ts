import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private orderService: OrderService) {}

  // Update the type of form parameter to NgForm
  onSubmit(form: NgForm): void {
    const order = form.value;
    this.orderService.saveOrder(order).subscribe(
      response => {
        console.log('Order submitted successfully', response);
      },
      error => {
        console.error('Error submitting order', error);
      }
    );
  }
}
