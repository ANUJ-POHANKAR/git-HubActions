import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // This is crucial for ngForm
import { HttpClientModule } from '@angular/common/http';

import { FormComponent } from './form/form.component'; // Import the Form component
import { OrderService } from './services/order.service'; // Import the Order service

@NgModule({
  declarations: [
    FormComponent, // Declare the FormComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule here
    HttpClientModule, // Import HttpClientModule to use HTTP services
  ],
  providers: [
    OrderService, // Provide the Order service for dependency injection
  ],
  bootstrap: [FormComponent] // Bootstrap the FormComponent instead of AppComponent
})
export class AppModule { }
