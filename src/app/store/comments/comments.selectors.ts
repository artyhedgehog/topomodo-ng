import * as R from 'ramda'

import { AppState, StoreFeature } from '../store.model'
import { CommentModel, CommentsState, CommentsStateKey } from './comments.models'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export const getFeature = createFeatureSelector<CommentsState>(StoreFeature.COMMENTS)

export const getComments = createSelector<AppState, CommentsState, CommentModel[]>(
  getFeature,
  R.propOr<CommentModel[]>([], CommentsStateKey.ITEMS)
)
