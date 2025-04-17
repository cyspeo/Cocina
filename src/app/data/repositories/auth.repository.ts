import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import firebase from 'firebase/compat/app';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  private userSubject = new BehaviorSubject<firebase.User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private firebase: FirebaseService) {
    this.firebase.user$().subscribe(user => this.userSubject.next(user));
  }

  login(email: string, password: string) {
    return this.firebase.login(email, password);
  }

  logout() {
    return this.firebase.logout();
  }

  get currentUser(): firebase.User | null {
    return this.userSubject.value;
  }
}