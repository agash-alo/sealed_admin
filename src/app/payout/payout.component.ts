import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.scss']
})
export class PayoutComponent implements OnInit {


  payout_list =  [
    { id: "1", Name: "R V sairam",Date: "27/1/2023", Time: "11:15:20am", Amount: " 100", Status: "paid" },
    { id: "2", Name: "R V sairam", Date: "27/1/2023", Time: "11:15:20am", Amount: "100", Status: "paid" },
    { id: "3", Name: "R V sairam", Date: "27/1/2023", Time: "11:15:20am", Amount: "100", Status: "paid" },
    { id: "4", Name: "R V sairam", Date: "27/1/2023", Time: "11:15:20am", Amount: "100", Status: "paid" },
    { id: "5", Name: "R V sairam", Date: "27/1/2023", Time: "11:15:20am", Amount: "100", Status: "paid" },
  ] 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
courierpayout_view(){
  this.router.navigate(['/courier-payout-view']);
}


}
