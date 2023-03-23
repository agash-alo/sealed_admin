import { Component, OnInit } from '@angular/core';
// import { Verify } from 'crypto';

@Component({
  selector: 'app-b2b-customers',
  templateUrl: './b2b-customers.component.html',
  styleUrls: ['./b2b-customers.component.scss']
})
export class B2bCustomersComponent implements OnInit {

  customer_list=[
    {id:"1", name:"R V SRIRAM",mobile_no:"7987897898",email:"abc@gmail.com",gst_no:"xxxxxxxxxxxxxx"},
    {id:"2", name:"R V SRIRAM",mobile_no:"7987897898",email:"abc@gmail.com",gst_no:"xxxxxxxxxxxxxx"},
    {id:"3", name:"R V SRIRAM",mobile_no:"7987897898",email:"abc@gmail.com",gst_no:"xxxxxxxxxxxxxx"},
    {id:"4", name:"R V SRIRAM",mobile_no:"7987897898",email:"abc@gmail.com",gst_no:"xxxxxxxxxxxxxx"},
    {id:"5", name:"R V SRIRAM",mobile_no:"7987897898",email:"abc@gmail.com",gst_no:"xxxxxxxxxxxxxx"}
  ]
// status:[
//   { id: "1"; name: "R V SRIRAM"; status: "Verify"; color:"" },
//   {  id: "2"; name: "R V SRIRAM"; status: "Unverify"; }
// ] 

  constructor() { }

  ngOnInit(): void {
  }

}
