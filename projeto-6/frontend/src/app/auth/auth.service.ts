import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = Boolean(localStorage.getItem("auth"));

  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    localStorage.setItem("auth", "true")

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    localStorage.removeItem("auth")

    this.isLoggedIn = false
  }
}
