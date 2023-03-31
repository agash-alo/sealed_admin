import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
// import { Verify } from 'crypto';

@Component({
  selector: 'app-b2b-customers',
  templateUrl: './b2b-customers.component.html',
  styleUrls: ['./b2b-customers.component.scss'],
})
export class B2bCustomersComponent implements OnInit {
  value: any;
  limit = 9;
  offset = 0;
  userType: any;
  b2bCustomerList: any = [];
  totalCount: any;

  // b2b_id: any;
  userid: any;
  _id: any;
  userId: any;
  name: any;
  email: any;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getlistb2bcustomerDetails();
  }
  pageChange(e): void {
    this.offset = this.paginationOffset(e['pageIndex'], e['pageSize']);
    // console.log(this.offset, 'iiiii');
    this.getlistb2bcustomerDetails();
  }
  paginationOffset(currentPage, itemsPerPage): number {
    let offset = currentPage * itemsPerPage + 1;
    return (offset = offset < 0 ? offset : offset - 1);
  }
  // search filter
  searchCustomer(e: any) {
    this.value = e?.target?.value;
    // console.log(this.value);
    this.getlistb2bcustomerDetails();
  }
  getlistb2bcustomerDetails() {
    this.userType = 'masteragent,normaluser';
    this.apiService
      .getAllb2bCustomer(this.userType, this.limit, this.offset, this.value)
      .then((res) => {
        this.b2bCustomerList = res.data?.data;
        this.totalCount = res?.data?.totalCount;

        console.log(this.b2bCustomerList);
      })
      .catch((err) => {});
  }

  updateVerifyStatus(e) {

    
    let payload = {
      isVerified: 'true',
      name: e.name,
      email: e.email,
    };
    this.apiService.updateb2bcustomer(e._id,payload).subscribe((response) => {
      this.b2bCustomerList = response.data;
      console.log(this.b2bCustomerList.name)

      if (response.code == 200) {
        console.log('success');
        this.getlistb2bcustomerDetails();
      } else {
      }
    }),
      (err) => {};
    // this.ngOnInit();
  }
}
