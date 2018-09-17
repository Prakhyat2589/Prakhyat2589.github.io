import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { List } from 'src/app/classes/getlist';
import  'rxjs/add/operator/map';


@Injectable()
 export class GetList {
     constructor(private http: Http) {}
     
    //Function to get user data with return type as Observable with arrary of list
     getUserList(): Observable<List[]>{
        
        //Return the data through get service and map with "r" response
        return this.http.get('src/app/dummy_data/dummy_data.json').map((r:Response) => r.json());
     }
}