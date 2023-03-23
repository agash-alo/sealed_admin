import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   foods: Food[] = [
    {value: 'steak-0', viewValue: 'R v sriram'},
    {value: 'pizza-1', viewValue: 'R v sriram'},
    {value: 'tacos-2', viewValue: 'R v sriram'},
    {value: 'tacos-3',viewValue:'R v sriram'},
  ];
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  more_details(){
    console.log('wel');
    this.router.navigate(['/trip_details']);
  }
}
