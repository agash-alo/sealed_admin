import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouriersComponent } from '../couriers/couriers.component';
import { ApiServiceService } from '../service/api-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-courier-view',
  templateUrl: './courier-view.component.html',
  styleUrls: ['./courier-view.component.scss'],
})
export class CourierViewComponent implements OnInit {
  courierId: any;
  courierdetails;
type:any;
  constructor(private router: Router, private apiService: ApiServiceService) {}

  ngOnInit(): void {
    // console.log(localStorage.getItem('courierViewId'),'dfsfdff')
    this.courierId = localStorage.getItem('courierViewId')
      ? JSON.parse(localStorage.getItem('courierViewId') || '')
      : '';
    console.log(this.courierId);
    // console.log(this.courierId.isVerified)
    this.getCourierView();
  }
  toggle = false;
  status = 'unverified';

  verifystatus() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'verified' : 'unverified';
  }

  getCourierView() {
    // console.log( "fdf",this.courierId[0]._id);
    this.apiService
      .getListCouriergetById(this.courierId )
      .then((res) => {
        console.log(res);
        this.courierdetails = res.data;
        console.log(this.courierdetails);

    // this.apiService.getCourierdetailgetByAddress(this.courierId,this.type).then((res)=>{
    //   console.log(res);
    // })
      })
      .catch((err) => {});
  }
  
}
