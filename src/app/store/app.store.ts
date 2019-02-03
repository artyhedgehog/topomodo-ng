import {ActionReducerMap, MetaReducer} from '@ngrx/store'

import {environment} from '../../environments/environment'

export const reducers: ActionReducerMap<{}> = {}

export const metaReducers: Array<MetaReducer<{}>> =
    !environment.production ? [] : []