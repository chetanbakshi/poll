import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PollModel } from '../models/poll-model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

  constructor(public http: HttpClient) { }

  getPollData(): Observable<PollModel[]> {
    return this.http.get<PollModel[]>(this.url).pipe(
      map(
        (res: any) => res = res.hits
      )
    );
  }




}
