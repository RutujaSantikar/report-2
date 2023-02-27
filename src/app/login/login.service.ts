import { Injectable } from '@angular/core';
import{HttpClient, HttpParameterCodec, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public login(username:any, password :any):Observable<any>{
    const url =  "http://114.143.217.43:8080/";
    let queryParams = new HttpParams();
      queryParams =  queryParams.append('usrName', username);
      queryParams =  queryParams.append('usrPassword', password);
      return this.http.post(url + 'authenticateUserPwdV1?', queryParams);
    // return this.http.post(url + 'authenticateUserPwdV1?usrName='+username+'&pwd='+password);
  }
}
