import { Component, OnInit } from '@angular/core';
// import { Verify } from 'crypto';

@Component({
  selector: 'app-b2b-customers',
  templateUrl: './b2b-customers.component.html',
  styleUrls: ['./b2b-customers.component.scss'],
})
export class B2bCustomersComponent implements OnInit {
  customer_list = [
    {
      id: '1',
      name: 'R V SRIRAM',
      mobile_no: '7987897898',
      email: 'abc@gmail.com',
      gst_no: 'xxxxxxxxxxxxxx',
    },
    {
      id: '2',
      name: 'mugesh',
      mobile_no: '7987897898',
      email: 'abc@gmail.com',
      gst_no: 'xxxxxxxxxxxxxx',
    },
    {
      id: '3',
      name: 'sanju',
      mobile_no: '7987897898',
      email: 'abc@gmail.com',
      gst_no: 'xxxxxxxxxxxxxx',
    },
    {
      id: '4',
      name: 'nish',
      mobile_no: '7987897898',
      email: 'abc@gmail.com',
      gst_no: 'xxxxxxxxxxxxxx',
    },
    {
      id: '5',
      name: 'nishanth',
      mobile_no: '7987897898',
      email: 'abc@gmail.com',
      gst_no: 'xxxxxxxxxxxxxx',
    },
  ];
  value: any;
  limit = 9;
  offset = 0;
  // status:[
  //   { id: "1"; name: "R V SRIRAM"; status: "Verify"; color:"" },
  //   {  id: "2"; name: "R V SRIRAM"; status: "Unverify"; }
  // ]

  constructor() {}

  ngOnInit(): void {
    this.getlistb2bcustomerDetails();
  }
  pageChange(e): void {
    this.offset = this.paginationOffset(e['pageIndex'], e['pageSize']);
    console.log(this.offset, 'iiiii');
    this.getlistb2bcustomerDetails();
  }
  paginationOffset(currentPage, itemsPerPage): number {
    let offset = currentPage * itemsPerPage + 1;
    return (offset = offset < 0 ? offset : offset - 1);
  }
  // search filter
  searchCustomer(e: any) {
    this.value = e?.target?.value;
    console.log(this.value);
    this.getlistb2bcustomerDetails();
  }
  getlistb2bcustomerDetails() {
    
  }
}
