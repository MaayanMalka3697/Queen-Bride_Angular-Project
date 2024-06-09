import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-admin',
  standalone: true,
  imports: [MatButtonToggleModule,CommonModule],
  templateUrl: './service-admin.component.html',
  styleUrl: './service-admin.component.css'
})
export class ServiceAdminComponent implements OnInit{
  
  public customerList !: Customer[]

  img1: string="../../assest/try.jpg"
  img2: string="assest/try.jpg"


  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomerList().subscribe({
      next: (res) => {
        this.customerList = res
      }
    })
  }

}
