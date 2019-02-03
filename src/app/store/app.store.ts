import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import { environment } from '../../environments/environment'
import { AppState, StoreFeature } from './store.model'
import { commentsReducer } from './comments'

export const reducers: ActionReducerMap<AppState> = {
  [StoreFeature.COMMENTS]: commentsReducer
}

export const metaReducers: Array<MetaReducer<AppState>>
  = !environment.production ? [] : []
