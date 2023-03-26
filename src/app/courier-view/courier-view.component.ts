import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouriersComponent } from '../couriers/couriers.component';
import { ApiServiceService } from '../service/api-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-courier-view',
  templateUrl: './courier-view.component.html',
  styleUrls: ['./courier-view.component.scss'],
})
export class CourierViewComponent implements OnInit {
  courierId: any;
  courierdetails;
  type: any;
  fileuploadstatus: boolean | undefined;
  selectedfile: any;
  filebase: any;
  toastService: any;
  translate: any;
  documentList: any;
  documentUpload: any;
  element: any;
  imagelist: any = [];
  userId: any;
  isVerified: any;
  // imageUrl: 'src/assets/images/custm-nbb/user_dummy.png' ;

  // imagelist=[];

  constructor(private router: Router, private apiService: ApiServiceService) {}

  ngOnInit(): void {
    // console.log(localStorage.getItem('courierViewId'),'dfsfdff')
    this.courierId = localStorage.getItem('courierViewId')
      ? JSON.parse(localStorage.getItem('courierViewId') || '')
      : '';

    console.log(this.courierId);
    // console.log(this.courierId.isVerified)
    this.getCourierView();
  }
  toggle = false;


  verifystatus() {
    // this.isVerified = !this.isVerified;

    let verified = {
      isVerified: true,
      // imgUrl: this.imagelist?.imgUrl,
    };

    this.apiService
      .updateCourierVerified(this.courierId, verified)
      .subscribe((response) => {
        if (response.code == 200) {
          console.log('success');
          this.getCourierView();
        } else {
        }
      }),
      (err) => {
        this.fileuploadstatus = false;
      };
  }
  returntocourier() {
    this.router.navigate(['/couriers']);
  }

  getCourierView() {
    // console.log( "fdf",this.courierId[0]._id);
    this.apiService
      .getListCouriergetById(this.courierId)
      .then((res) => {
        console.log(res);
        this.courierdetails = res.data;
        this.isVerified = this.courierdetails.isVerified;

        console.log(this.courierdetails);
      })
      .catch((err) => {});
  }

  async onChange(files) {
    this.fileuploadstatus = true;
    // this.imagelist.imgUrl.value = 'src/assets/images/custm-nbb/user_dummy.png';
    if (files && files.length > 0) {
      var file = files[0];
      let ext =
        file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) ||
        file.name;
      //.png,.jpg,.pdf,.doc,.docx,.jpeg
      // console.log("file.size",file.size)
      if (
        ext == 'png' ||
        ext == 'jpg' ||
        ext == 'pdf' ||
        ext == 'doc' ||
        ext == 'docx' ||
        ext == 'jpeg'
      ) {
        if (!(file.size > 2097152)) {
          // console.log(files)
          let x: any;
          var splitted;
          // this.urls ;
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            let str: any = reader.result;
            splitted = str.split(',');
          };
          setTimeout(() => {
            this.uploadFile(files, files[0], splitted[1]);
            // console.log("Data", splitted)
            // this.urls.push(x)
          }, 1000);
          this.filebase = splitted;
          console.log(this.filebase);
        } else {
          this.fileuploadstatus = false;
        }
      } else {
      }
    }
  }
  async uploadFile(files, file, splitted) {
    // if (this.documentArr.length < 16) {
    // let fileInput={
    //   "file":splitted,
    //   "fileName":file.name,
    //   "fileSize":file.size,
    //   "contentType":file.type
    // }
    // let fileValue={
    //   visaTypeCode: step2Det,
    //   passportNumber: step1Det[0].visaSelection.passportNumber,
    //   nationalityCode: step1Det[0].visaSelection.nationality,
    //   documentTypeCode: element.documentCode,
    //   attachmentDetailsDTO: {
    //     file: splitted,
    //     fileName: file.name,
    //     fileSize: file.size,
    //     contentType: file.type
    //   }
    // }
    // const formData2:any  = new FormData();
    // formData2.append('uploadAttachmentRequestDTO', JSON.stringify(fileValue));
    // formData2.append('file', files);
    const formData1: any = new FormData();
    // formData1.append('attachmentDetailsDTO', JSON.stringify(fileInput));
    formData1.append('file', file);
    // formData1.append('fileName', file.name);
    // formData1.append('fileSize', file.size);
    // formData1.append('contentType', file.type);

    await this.apiService.UploadFile(formData1).subscribe(
      (res) => {
        res.data;
        this.imagelist = res.data;
        // var resp: any = res;
        // console.log(res)
        // this.imagelist=res;
        console.log(this.imagelist?.imgUrl);
        // console.log('required documents  res ', res);
      },
      (err) => {
        this.fileuploadstatus = false;
      }
    );
  }
}
