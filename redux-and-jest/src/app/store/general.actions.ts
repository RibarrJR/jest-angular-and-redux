import { createAction, props } from '@ngrx/store';


export const changeLoading = createAction('[Scoreboard Page] Set Scores', props<{loading:number}>());
