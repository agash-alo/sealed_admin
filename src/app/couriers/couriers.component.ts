import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';




@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss'],
})
export class CouriersComponent implements OnInit {
  courier_list;

  limit = 9;
  offset = 0;
  totalCount: any;
  userType: any;
  value: any;
  // status = [
  //   {id: "1", isVerified :"true",value:"verified"},
  //   {id:"2",isverfied:"false",value:"unverfied"}
  // ];

  constructor(private router: Router, private apiService: ApiServiceService) {}

  ngOnInit(): void {
    console.log('hii');
    this.getListCourier();
  }

  getListCourier() {
    this.userType = 'deliveryman';
    this.apiService
      .getAllCourierDetails(this.userType, this.limit, this.offset, this.value)
      .then((res) => {
        this.courier_list = res.data?.data;
        console.log(this.courier_list);
        this.totalCount = res?.data?.totalCount;
      })
      .catch((err) => {});
  }

  pageChange(e): void {
    this.offset = this.paginationOffset(e['pageIndex'], e['pageSize']);
    console.log(this.offset, 'iiiii');
    this.getListCourier();
  }
  paginationOffset(currentPage, itemsPerPage): number {
    let offset = currentPage * itemsPerPage + 1;
    return (offset = offset < 0 ? offset : offset - 1);
  }

  searchCourier(e: any) {
    this.value = e?.target?.value;
    this.getListCourier();
  }

  courier_payout() {
    this.router.navigate(['/courier-payout']);
  }
  generate_payout() {
    this.router.navigate(['/courier-generate-payout']);
  }

  couriersView(i: any) {
    console.log(i);
    // console.log('this?.courier_list?.data?.[i]._id', this.courier_list?.[i]._id);
    localStorage.setItem('courierViewId', JSON.stringify(i));
    //  console.log(localStorage.getItem('courierViewId'), 'dfsfdff');
    this.router.navigate(['/courier-view']);
  }
}
