import { Injectable } from '@angular/core';
import { ServiceProviders } from '../../models/serviceProviders.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidersService {

  public serviceProvidersList: Observable<ServiceProviders[]> | undefined = undefined
  constructor(private _http: HttpClient) { }

  getTurnsList(): Observable<ServiceProviders[]>{
    if( this.serviceProvidersList = undefined){
      this.serviceProvidersList = this._http.get<ServiceProviders[]>(`https://localhost:7173/QueenBride/ServiceProvider`)       
    }
    return this. serviceProvidersList as Observable<ServiceProviders[]>      
  }

  getTurns(index: number): Observable<ServiceProviders>{
    //const index =  this.customersList.findIndex((x)=> x.name == name && x.email == email)
    return this._http.get<ServiceProviders>(`https://localhost:7173/QueenBride/ServiceProvider/${index}`)
  }

  add(serviceProviders: ServiceProviders): Observable<ServiceProviders>{
    this.serviceProvidersList = undefined
    return this._http.post<ServiceProviders>(`https://localhost:7173/QueenBride/ServiceProvider`,serviceProviders)
  }

  update(serviceProviders: ServiceProviders): Observable<ServiceProviders>{
    const index = serviceProviders.id
    this.serviceProvidersList = undefined
    return this._http.put<ServiceProviders>(`https://localhost:7173/QueenBride/ServiceProvider/${index}`,serviceProviders)
  }

  delete(serviceProviders: ServiceProviders): Observable<ServiceProviders>{
    this.serviceProvidersList = undefined
    return this._http.put<ServiceProviders>(`https://localhost:7173/QueenBride/ServiceProvider`,serviceProviders)
  }


}
