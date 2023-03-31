import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-demo-request',
  templateUrl: './demo-request.component.html',
  styleUrls: ['./demo-request.component.scss'],
})
export class DemoRequestComponent implements OnInit {
  value: any;
  demoList: any;
  totalCount: any;
  limit = 9;
  offset = 0;
  dialog: any;
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getlistDemoRequest();
  }

  pageChange(e): void {
    this.offset = this.paginationOffset(e['pageIndex'], e['pageSize']);
    this.getlistDemoRequest();
  }
  paginationOffset(currentPage, itemsPerPage): number {
    let offset = currentPage * itemsPerPage + 1;
    return (offset = offset < 0 ? offset : offset - 1);
  }
  // search filter
  searchCustomer(e: any) {
    this.value = e?.target?.value;
    this.getlistDemoRequest();
  }

  getlistDemoRequest() {
    this.apiService
      .getListDemoReq(this.limit, this.offset, this.value)
      .then((res) => {
        this.demoList = res.data?.data;
        this.totalCount = res?.data?.totalCount;
        console.log(this.demoList);
      })
      .catch((err) => {});
  }
  updateStatus(e) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { status: 'Update' },
    });
    let payload = {
      demoStatus: 'closed',
    };
    this.apiService.updatedemoList(e._id, payload).subscribe((response) => {
      this.demoList = response.data;
      console.log(this.demoList.name);

      if (response.code == 200) {
        console.log('success');
        this.getlistDemoRequest();
      } else {
      }
    }),
      (err) => {};
    // this.ngOnInit();
  }
}
