import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PollModel } from 'src/app/models/poll-model';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-poll-dialog',
  templateUrl: './poll-dialog.component.html',
  styleUrls: ['./poll-dialog.component.scss']
})
export class PollDialogComponent implements OnInit {



  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: PollModel) { }

  ngOnInit() {
    console.log(this.data)
  }


}
