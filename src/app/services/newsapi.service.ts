import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetLocationService } from './get-location.service';


@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
 
  private searchTerm: BehaviorSubject<string>;

  


  constructor(private http: HttpClient) {
    this.searchTerm = new BehaviorSubject<string>('');
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }

  setSearchTerm(newValue: string): void {
    this.searchTerm.next(newValue);
  }

 
  

  API_KEY: string = '082c377cfd8d44f3b20ef9f522e07230';
  url: string = 'http://newsapi.org/v2/everything?q=';
  params: string = '&sortBy=relevancy&apiKey=' //REPLACE YYYY-MM-DD WITH VALID DATE WITHIN ONE MONTH OF RUNNING APP
  
  // Top Headlines API URL
  topHeaadlinesNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=082c377cfd8d44f3b20ef9f522e07230';
  // Technology News API URL
  techNews = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=082c377cfd8d44f3b20ef9f522e07230';
  //business News
  businessNews = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=082c377cfd8d44f3b20ef9f522e07230'

  // Use Tech Methods
  tcTechNews(): Observable<any> {
    return this.http.get((this.techNews))
  }

  
  // Business News
  tcBusinessNews(): Observable<any> {
    return this.http.get(this.businessNews)
  }

  tcHeadlines(): Observable<any> {
    return this.http.get(this.topHeaadlinesNews)
  }
  
  getNewsServiceBySearch(searchWord: string) {
    if (searchWord.length) {
      return this.http.get(this.url + encodeURIComponent(searchWord) + this.params + this.API_KEY);
    }
    return this.http.get(this.topHeaadlinesNews)
  }


}
