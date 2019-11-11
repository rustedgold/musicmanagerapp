import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { Festival } from '../shared/festival';

const endpoint = 'https://musicrecords.herokuapp.com/app/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MusicmanagerService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    return res;
  }

  loadAllMusicFestivals(location): Observable<any> {
    return this.http.get(endpoint + 'loadAllMusicFestivals/' + location).pipe(
      map(this.extractData));
  }

   // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}