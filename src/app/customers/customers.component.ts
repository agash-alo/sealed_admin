import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  route: any;
  userType: any;
  limit = 9;
  offset = 0;
  customer_list;
  constructor(private router: Router, private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  totalCount: any;
  value: any;
  getUserDetails() {
    this.userType = 'consumer';
    this.apiService
      .getListUserDetails(this.userType, this.limit, this.offset, this.value)
      .then((res) => {
        this.customer_list = res.data?.data;
        this.totalCount = res?.data?.totalCount;
        console.log(this.customer_list);
      })
      .catch((err) => {});
  }
  pageChange(e): void {
    this.offset = this.paginationOffset(e['pageIndex'], e['pageSize']);
    console.log(this.offset, 'iiiii');
    this.getUserDetails();
  }
  paginationOffset(currentPage, itemsPerPage): number {
    let offset = currentPage * itemsPerPage + 1;
    return (offset = offset < 0 ? offset : offset - 1);
  }
  searchCustomer(e: any) {
    this.value = e?.target?.value;
    this.getUserDetails();
  }
  customersView(i: any) {
    localStorage.setItem(
      'userViewId',
      JSON.stringify(this?.customer_list?.[i]?._id)
    );
    this.router.navigate(['/customer-view'])
  }
}
