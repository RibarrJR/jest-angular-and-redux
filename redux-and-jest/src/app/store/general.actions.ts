import { createAction, props } from '@ngrx/store';


export const changeLoading = createAction('[General] Change Loading State', props<{loading:boolean}>());
