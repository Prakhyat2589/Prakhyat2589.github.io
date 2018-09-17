import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { List } from 'src/app/classes/getlist';
import  'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GetList1 {

  constructor(private http: Http) {}

  getUserList(): Observable<List[]>{
        
    //Return the data through get service and map with "r" response
    return this.http.get('src/app/dummy_data/dummy_data.json').map((r:Response) => r.json());
 }
}
