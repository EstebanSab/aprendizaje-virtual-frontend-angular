import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/enviroment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserCredentials } from '../auth/model/UserCredentials'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {



    private apiServerUrl=enviroment.apiBaseUrl;

    constructor(private http:HttpClient) { }
  
    public loginUserApi(uc:UserCredentials):Observable<HttpResponse<Object>>
    {
      return this.http.post<HttpResponse<Object>>(`${this.apiServerUrl}/v1/login`,uc);
    }

  
}
