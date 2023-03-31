import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/enviroment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {



    private apiServerUrl=enviroment.apiBaseUrl;

    
}
