import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = 'https://localhost:7068/api';
  header = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('AuthToken')}` || '',
  });
  constructor(private httpClient: HttpClient) {}

  loginSignUpApiCall(data: any, endPoint: string) {
    return this.httpClient.post(`${this.baseUrl + endPoint}`, data);
  }
  getNotesApiCall(endPoint: string) {
    return this.httpClient.get(`${this.baseUrl + endPoint}`, {
      headers: this.header,
    });
  }
  createNotesApiCall(data: any, endPoint: string) {
    return this.httpClient.post(`${this.baseUrl + endPoint}`, data, {
      headers: this.header,
    });
  }
  archiveNoteApiCall(endpoint: string) {
    return this.httpClient.patch(
      this.baseUrl + endpoint,
      {},
      { headers: this.header }
    );
  }
  trashNoteApiCall(endpoint: string) {
    return this.httpClient.delete(this.baseUrl + endpoint, {
      headers: this.header,
    });
  }
  NoteColorApi(endpoint: string, data: any, color: string) {
    return this.httpClient.put(
      this.baseUrl + endpoint,
      { noteId: data, colour: color },
      { headers: this.header }
    );
  }
  editNoteApi(endpoint: string, data: any) {
    return this.httpClient.put(this.baseUrl + endpoint, data, {
      headers: this.header,
    });
  }
}
