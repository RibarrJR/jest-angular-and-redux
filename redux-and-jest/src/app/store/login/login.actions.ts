import { createAction, props } from '@ngrx/store';
import { UserSession } from './login.reducer';


export const setSession = createAction('[Login] Set User Session', props<{loggedUserSession:UserSession}>());
