import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteserviceService {
  constructor(private httpService: HttpService) {}
  getApi() {
    return this.httpService.getNotesApiCall('/Notes');
  }
  createNotesApi(data: any) {
    return this.httpService.createNotesApiCall(data, '/Notes');
  }
  archiveNoteApi(noteId: any) {
    return this.httpService.archiveNoteApiCall(`/Notes/archive${noteId}`);
  }
  trashNoteApi(noteId: any) {
    return this.httpService.trashNoteApiCall(`/Notes/trash${noteId}`);
  }
  NoteColorApi(noteId: any, color: string) {
    return this.httpService.NoteColorApi(`/Notes/notecolor`, noteId, color);
  }
  editNoteApi(data: any) {
    return this.httpService.editNoteApi(`/Notes/${data.noteId}`, data);
  }
}
