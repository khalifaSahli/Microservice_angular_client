import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseurl=`${environment.apiUrl}`;
  constructor(private http:HttpClient) { }
    
fetchReviews(){
  return this.http.get(this.baseurl+'');
}
}
