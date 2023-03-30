import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  banner_management = [
    { id: '1', imgUrl: '../../assets/images/custm-nbb/upload.png' },
    // { id: '1', imgUrl: '../../assets/images/custm-nbb/upload.png' },
    // { id: '1', imgUrl: '../../assets/images/custm-nbb/upload.png' },
  ];
  Notary = [
    // { id: '1', image: '../../assets/images/custm-nbb/settings-banner.png' },
    // { id: '2', image: '../../assets/images/custm-nbb/settings-banner.png' },
    { id: '1', imgUrl: '../../assets/images/custm-nbb/upload.png' },
  ];
  fileuploadstatus: boolean | undefined;
  selectedfile: any;
  filebase: any;
  imagelist: any;
  bannerConsumerList: any;
  bannerWebList: any;
  bannerNotaryList: any;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getBannerList('mobile');
    this.getBannerList('web');
    this.getBannerList('notary');
  }

  async onChange(files, type) {
    this.fileuploadstatus = true;
    if (files && files.length > 0) {
      var file = files[0];
      let ext =
        file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) ||
        file.name;
      if (
        ext == 'png' ||
        ext == 'jpg' ||
        ext == 'pdf' ||
        ext == 'doc' ||
        ext == 'docx' ||
        ext == 'jpeg'
      ) {
        console.log('hgdjjsda1111');
        if (!(file.size > 2097152)) {
          let x: any;
          var splitted;
          // this.urls ;
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            let str: any = reader.result;
            splitted = str.split(',');
          };
          console.log('hgdjjsda1111222');
          setTimeout(() => {
            console.log('hgdjjsda1111222333');
            this.uploadFile(files, files[0], splitted[1], type);
          }, 1000);
          this.filebase = splitted;
        } else {
          this.fileuploadstatus = false;
        }
      } else {
      }
    }
  }
  async uploadFile(files, file, splitted, type) {
    const formData1: any = new FormData();
    console.log('hgdjjsda');
    formData1.append('file', file);

    await this.apiService.uploadBanner(formData1).subscribe(
      (res) => {
        if (
          res.status == true &&
          res?.data?.imgUrl &&
          res?.data?.imgUrl != ''
        ) {
          let payload = {
            name: 'banner',
            imageUrl: res?.data?.imgUrl,
            type: type,
            status: 'active',
          };
          this.apiService.createBanner(payload).subscribe((res) => {});
        }
        // console.log(res)
        this.imagelist = res.data;
      },
      (err) => {
        this.fileuploadstatus = false;
      }
    );
  }
  consumerCheck = true;
  webCheck = true;
  notaryCheck = true;

  async getBannerList(type) {
    console.log(type);
    this.apiService
      .getBannerList(type)
      .then((res) => {
        if (type == 'mobile') {
          this.bannerConsumerList = res?.data?.data ? res.data.data : [];
          if (this.bannerConsumerList?.length >= 3) {
            this.consumerCheck = false;
          } else {
            this.consumerCheck = true;
          }
         
          console.log('this.bannerConsumerList', this.bannerConsumerList);
        }
        if (type == 'web') {
          console.log(this.bannerWebList);
          this.bannerWebList = res?.data?.data ? res.data.data : [];
          if (this.bannerWebList?.length >= 3) {
            this.webCheck = false;
          } else {
            this.webCheck = true;
          }
          
          console.log('this.bannerWebList', this.bannerWebList);
        }
        if (type == 'notary') {
          this.bannerNotaryList = res?.data?.data ? res.data.data : [];
          if (this.bannerNotaryList?.length >= 3) {
            this.notaryCheck = false;
          } else {
            this.notaryCheck = true;
          }
          
          console.log('this.bannerConsumerList', this.bannerConsumerList);
        }
      })
      .catch((err) => {});
  }
  deleteBanner(i: any, data: any, type: any) {
    let id = data[i]?._id;
    this.apiService.deleteBanner(id).subscribe((res) => {});
    this.getBannerList(type);
  }
  updateBanner(i: any, data: any, type: any) {
    let id = data[i]?._id;
    this.apiService.updateBanner(id).subscribe((res) => {});
    this.getBannerList(type);
  }
}
