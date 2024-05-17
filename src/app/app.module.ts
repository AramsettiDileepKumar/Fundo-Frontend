import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ArchieveContainerComponent } from './components/archieve-container/archieve-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NoteCardComponent,
    DasboardComponent,
    CreateNoteComponent,
    HeaderComponent,
    SideNavComponent,
    ArchieveContainerComponent,
    TrashContainerComponent,
    NotesContainerComponent,
    EditNoteComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
