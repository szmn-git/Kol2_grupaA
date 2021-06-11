import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get(this.url + '/api/order/items/');
  }

  // tslint:disable-next-line:typedef
  getById(id: string) {
    return this.http.get(this.url + '/api/order/items/' + id);
  }

}
