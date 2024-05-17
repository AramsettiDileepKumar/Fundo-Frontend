import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}
  loginApi(data: any) {
    return this.httpService.loginSignUpApiCall(data, '/Registration/Login');
  }
  signupApi(data: any) {
    return this.httpService.loginSignUpApiCall(data, '/Registration');
  }
}
