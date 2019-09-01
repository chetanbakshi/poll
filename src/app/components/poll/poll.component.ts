import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../services/app.service';
import { PollModel } from '../../models/poll-model';
import { Subscription, interval } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { PollDialogComponent } from '../poll-dialog/poll-dialog.component';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit, OnDestroy {

  poll: MatTableDataSource<PollModel>;
  displayedColumns: string[];
  subscription: Subscription;


  constructor(public service: AppService, public dialog: MatDialog) {
    this.displayedColumns = ['title', 'url', 'created_at', 'author'];
  }

  ngOnInit() {
    this.fetchPollData();
    this.subscription = interval(10000).subscribe(x => {
      this.fetchPollData();
    })
  }

  fetchPollData() {
    this.service.getPollData().subscribe(
      (res: PollModel[]) => {
        console.log(res);
        this.poll = new MatTableDataSource(res)
      },
      (err: HttpErrorResponse) => console.error(err)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(val): void {
    console.log(val);
    this.poll.filter = val.trim().toLowerCase();
  }

  displayDialog(row) {
    const dialogRef = this.dialog.open(PollDialogComponent, {
      data: row
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
