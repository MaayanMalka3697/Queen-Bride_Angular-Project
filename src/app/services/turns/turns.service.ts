import { Injectable } from '@angular/core';
import { Turn } from '../../models/turns.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  public turnsList: Observable<Turn[]> | undefined = undefined

  constructor(private _http: HttpClient) { }

  getTurnsList(): Observable<Turn[]>{
    if(this.turnsList === undefined){
      this.turnsList = this._http.get<Turn[]>(`https://localhost:7173/QueenBride/Turns`)
    }
    return this.turnsList  as Observable<Turn[]>
  }

  getTurns(index: number): Observable<Turn[]>{
    //this.turnsList.filter((x)=> )
    return this._http.get<Turn[]>(`https://localhost:7173/QueenBride/Turns/${index}`)
  }

  delete(index: number): Observable<Turn[]>{
    this.turnsList = undefined
    return this._http.delete<Turn[]>(`https://localhost:7173/QueenBride/Turns/${index}`)
  }

  add(turn: Turn): Observable<Turn[]>{
    this.turnsList = undefined
    return this._http.post<Turn[]>(`https://localhost:7173/QueenBride/Turns`,turn)
  }

  // update(turn: Turn): Observable<Turn[]>{
  //   const index = turn.id
  //   this.turnsList = undefined
  //   return this._http.put<Turn[]>(`https://localhost:7173/QueenBride/Turns/${index}`,turn)
  // }
}
