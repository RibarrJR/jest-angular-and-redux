import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoginState, UserSession } from '../store/login/login.reducer';
import { setSession } from '../store/login/login.actions';
import { selectSession } from '../store/login/login.selectors';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userLogged$: Observable<UserSession> = null;
  login: FormGroup;


  constructor(private _store: Store<LoginState>, public _fb: FormBuilder) { }

  ngOnInit(): void {
    this.login = this._fb.group({
      user:['', [Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })

    this.userLogged$ = this._store.pipe(select(selectSession));
  }

  getUserSession() {

  }

  setUser() {


    this._store.dispatch(setSession({ loggedUserSession: { companyId: 1, userId: this.getRandomInt(10, 30), userName: "Ernesto Junior Ribarr" } }))
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
