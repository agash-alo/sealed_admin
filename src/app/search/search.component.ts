import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {



  trip_list=[
    {id:"1",date:"25.1.2023 10:15:27 654321", delivery_type:"one way trip",package:"food" ,courier_assign:"Courier not yet assigned",trip_status:"New trip no courier",payment:"cod"},
    {id:"2",date:"25.1.2023 10:15:27 654321", delivery_type:"one way trip",package:"food" ,courier_assign:"Courier not yet assigned",trip_status:"New trip no courier",payment:"cod"},
    {id:"3",date:"25.1.2023 10:15:27 654321", delivery_type:"one way trip",package:"food" ,courier_assign:"Courier assigned S R Sriram",trip_status:"Active",payment:"cod"},
    {id:"4",date:"25.1.2023 10:15:27 654321", delivery_type:"one way trip",package:"food" ,courier_assign:"Courier assigned S R Sriram",trip_status:"Completed",payment:"cod"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
