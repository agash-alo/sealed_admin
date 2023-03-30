import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courier-payout-view',
  templateUrl: './courier-payout-view.component.html',
  styleUrls: ['./courier-payout-view.component.scss'],
})
export class CourierPayoutViewComponent implements OnInit {
  triplist = [
    { id: '1', Date: ' 25/01/23', Time: '10:10:25am', Trip: '654321' },
    { id: '2', Date: ' 25/01/23', Time: '10:10:25am', Trip: '654321' },
    { id: '3', Date: ' 25/01/23', Time: '10:10:25am', Trip: '654321' },
    { id: '4', Date: ' 25/01/23', Time: '10:10:25am', Trip: '654321' },
    { id: '5', Date: ' 25/01/23', Time: '10:10:25am', Trip: '654321' },
    { id: '6', Date: ' 25/01/23', Time: '10:10:25am', Trip: '654321' },
  ];
paymentdetails=[
  {id:"1",}
]
  constructor(private router: Router) {}

  ngOnInit(): void {}

  moredetails() {
    this.router.navigate(['/trip_details']);
  }
}
