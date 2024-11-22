import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private robotUrl = 'https://robohash.org/';
  private dogUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getBookTitle(id: number): Observable<any> {
    const bookUrl = `https://gutendex.com/books/?ids=${id}`;
    return this.http.get(bookUrl).pipe(
      catchError(() => of({ results: [{ title: 'Unknown Book' }] }))
    );
  }

  getRandomDogImage(): Observable<any> {
    return this.http.get(this.dogUrl);
  }

  getRobotImage(seed: string): string {
    return `${this.robotUrl}${seed}`;
  }
}
