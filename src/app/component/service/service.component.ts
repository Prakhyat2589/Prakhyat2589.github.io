import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/classes/getlist';
import { GetList1 } from 'src/app/services/getlist-service1.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  
  ListofUsers1 : List[] = [];
  //Input tag is used to commnicate with the child component, not required
  //@Input('ListofUsers3') listofusers2;
    
  //Class of service GetList1 is called and constructor is used to initialize the class
  constructor(private getList1: GetList1) { }
  
  ngOnInit(): void {
    
    //this.getList1.getUserList()--call will happen asynchronously and after that subscribe function will happen
    this.getList1.getUserList().subscribe( r => this.ListofUsers1 = r)

  }
}
