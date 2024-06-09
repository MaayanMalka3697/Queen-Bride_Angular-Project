import { Component } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  public customerList !: Customer[]

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomerList().subscribe({
      next: (res) => {
        this.customerList = res
      }
    })
  }
}
