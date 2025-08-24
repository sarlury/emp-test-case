import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReq, loginRes } from '../utils/models/login';
import { Path } from '../utils/Path';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient = inject(HttpClient);

  authLogin(body: LoginReq): Observable<loginRes> {
    return this.httpClient.post<loginRes>(Path.LOGIN, body);
  }
  
}
