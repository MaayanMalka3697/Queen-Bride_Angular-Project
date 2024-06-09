import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public customersList: Observable<Customer[]> | undefined = undefined
  
  constructor(private _http: HttpClient) { }

  getCustomerList(): Observable<Customer[]>{
    if( this.customersList === undefined){
      this.customersList = this._http.get<Customer[]>(`https://localhost:7173/QueenBride/Customers`)  
    }
    return this. customersList as Observable<Customer[]>      
  }

  getCustomer(index: number): Observable<Customer>{
    //const index =  this.customersList.findIndex((x)=> x.name == name && x.email == email)
    return this._http.get<Customer>(`https://localhost:7173/QueenBride/Customers/${index}`)
  }

  add(customer: Customer): Observable<Customer>{
    this.customersList = undefined
    return this._http.post<Customer>(`https://localhost:7173/QueenBride/Turns`,customer)
  }

  update(customer: Customer): Observable<Customer>{
    const index = customer.id
    this.customersList = undefined
    return this._http.put<Customer>(`https://localhost:7173/QueenBride/Turns/${index}`,customer)
  }
}

