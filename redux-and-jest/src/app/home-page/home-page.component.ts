import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeneralState } from '../store/general.reducer';
import { changeLoading } from '../store/general.actions';
import { setSession } from '../store/login/login.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public _store: Store<GeneralState>) { }

  ngOnInit(): void {
    this._store.dispatch(changeLoading({ loading:true  }));
  }
}
