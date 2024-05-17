import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ArchieveContainerComponent } from './components/archieve-container/archieve-container.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { AuthGuardService } from './services/Authguard-service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'notecard', component: NoteCardComponent },
  {
    path: 'dashboard',
    component: DasboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'archieve', component: ArchieveContainerComponent },
      { path: 'notes', component: NotesContainerComponent },
      { path: 'trash', component: TrashContainerComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
