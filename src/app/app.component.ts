import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-itsren';
 
  customers=[];
  status:any;
  constructor(private restService:RestService,private router:Router ){

  }
  getAll(){
    // GET Request to get all customers
    this.restService.getAllCustomers().subscribe((data:any)=>{
      this.customers=data.data
      this.status=data.status;
    },error=>{
      this.status=0
      console.log("status is after error ",this.status)     })
  }
  getCustomerByID(id:String|number){
    // GET Request to get all customers
    this.restService.getListOfCustomers(id).subscribe((data:any)=>{
      this.customers=data.data
      this.status=data.status;
    },error=>{
      this.status=0
      console.log("status is after error ",this.status)     })
  }
}
