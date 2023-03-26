import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})
export class CustomerViewComponent implements OnInit {
  userdetails: any;
  addressDetails;
  viewshow: boolean =false;
  activetrip: any;
  constructor(private router: Router, private apiService: ApiServiceService) {}
  cususerId: any;
  ngOnInit(): void {
    this.cususerId = localStorage.getItem('userViewId')
      ? JSON.parse(localStorage.getItem('userViewId') || '')
      : '';
    this.getUserViewDetails();
  }

  userView: any;
  getUserViewDetails() {
    console.log('fd', this.cususerId);
    this.apiService
      .getListUsergetById(this.cususerId)
      .then((res) => {
        console.log(res);
        this.userdetails = res.data;
        console.log(this.userdetails);
        // console.log(this.userdetails.addressDetails[0]?.address?.street);
      })
      .catch((err) => {});
  }
  viewDetails()
  {
    this.viewshow =true;
     this.apiService
       .getListCustomerActiveTrip(this.cususerId)
       .then((res) => {
         this.activetrip = res.data.data;
         console.log(this.activetrip);
        
       })
       .catch((err) => {});
  }
}
