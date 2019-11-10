import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

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
    let body = res;
    return body || { };
  }

  loadAllMusicFestivals(location): Observable<any> {
    return this.http.get(endpoint + 'loadAllMusicFestivals/' + location).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}