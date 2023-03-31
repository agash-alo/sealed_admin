import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'R v sriram' },
    { value: 'pizza-1', viewValue: 'R v sriram' },
    { value: 'tacos-2', viewValue: 'R v sriram' },
    { value: 'tacos-3', viewValue: 'R v sriram' },
  ];
  type:any;
  activetrip: any;
  Consumeractivetrip: any;
  totalCount: any;
  constructor(private router: Router, private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getListConsumerNewtrip();
  }

  getListConsumerNewtrip() {
     
     this.apiService
       .getconsumerActiveTrip()
       .then((res) => {
         this.Consumeractivetrip = res?.data?.data ? res.data.data : [];
         this.totalCount = res?.data.totalCount;
         console.log(this.Consumeractivetrip.newAt);
       })
       .catch((err) => {});
  }
  

  more_details() {
    // console.log('wel');
    this.router.navigate(['/trip_details']);
  }
}
