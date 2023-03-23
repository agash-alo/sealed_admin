import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courier-payout',
  templateUrl: './courier-payout.component.html',
  styleUrls: ['./courier-payout.component.scss']
})
export class CourierPayoutComponent implements OnInit {


  payout_Items=[
    {id:"1",Date:"27/1/2023",Time:" 11:15:20am",Amount:"500",no_of_trips:"10"},
    {id:"2",Date:"27/1/2023",Time:" 11:15:20am",Amount:"500",no_of_trips:"10"},
    {id:"3",Date:"27/1/2023",Time:" 11:15:20am",Amount:"500",no_of_trips:"10"},
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  CourierPayoutView(){
    this.router.navigate(['/courier-payout-view']);
  }
}
