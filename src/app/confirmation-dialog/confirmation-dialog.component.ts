import { Component,  Inject,  Input, OnInit } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  message: string = 'Are you sure You Want to ';
  msg: string = 'this Record?';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';
  showmsg: any;
  _api: any;

  //   @Output() ParentComponet:EventEmitter<any> = new EventEmitter()
  status: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {}

  ngOnInit(): void {
    this.status = this.data.status;
    console.log(this.status);
  }

  onNoClick(): void {
    this._dialogRef.close(true);
  }
}
