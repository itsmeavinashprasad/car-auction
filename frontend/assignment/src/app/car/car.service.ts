import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private subject: Subject<string>;

  constructor(private http: HttpClient) {
    this.subject = new Subject<string>();
  }

  getAllCars(): Observable<any> {
    return this.http.get(`${environment.apiUrl}cars`);
  }

  getCarDetails(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}cars/${id}`);
  }

  sendMessageToSibling(message: string) {
    this.subject.next(message);
  }

  getMessageFromSibling(): Observable<string> {
    return this.subject.asObservable();
  }
}
