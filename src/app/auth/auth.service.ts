import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthService {
    private LOGIN_URL = '';
    constructor(private http: HttpClient) {}
    login(email, password) {
        this.http.post<any>(this.LOGIN_URL, { email, password })
            .subscribe(response => {
                console.log(response);
            });
    }
}
