import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from 'src/app/core/model/UserCredentials';
import { enviroment } from 'src/environments/enviroment';


@Injectable({
  providedIn: 'root'
})


export class AuthRestService {

  private apiServerUrl=enviroment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public loginUserApi(uc:UserCredentials):Observable<HttpResponse<Object>>{
    return  this.http.post(
      `${this.apiServerUrl}/v1/auth/login`,
      JSON.stringify(uc),
      {observe:'response'});
    }


}