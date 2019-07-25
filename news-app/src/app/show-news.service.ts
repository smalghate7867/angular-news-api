import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowNewsService {
 
  //readonly ApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f43517bb36c04744a65fe54c4043a8eb';

  constructor(private http:HttpClient) { }
  //get Data from URL
  getData() {
   return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f43517bb36c04744a65fe54c4043a8eb`);
  }
}
