import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  getLanguage(id) {
    return this.http.get('/api/language/' + id + '/get');
  }

  retrieveLanguageOptions() {
    return this.http.get <any[]>('api/language/options');
  }

}
