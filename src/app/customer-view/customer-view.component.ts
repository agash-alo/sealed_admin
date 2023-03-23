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
  constructor(private router: Router, private apiService: ApiServiceService) {}
  userId: any;
  ngOnInit(): void {
    this.userId = localStorage.getItem('userViewId')
      ? JSON.parse(localStorage.getItem('userViewId') || '')
      : '';
    this.getUserViewDetails();
  }

  userView: any;
  getUserViewDetails() {
    console.log('fd', this.userId);
    this.apiService
      .getListUsergetById(this.userId)
      .then((res) => {
        console.log(res);
        this.userdetails = res.data;
        console.log(this.userdetails);
        console.log(this.userdetails.addressDetails[0]?.address?.street);
      })
      .catch((err) => {});
  }
}
