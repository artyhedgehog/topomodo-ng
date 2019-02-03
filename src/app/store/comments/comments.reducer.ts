import { Action } from '@ngrx/store'
import * as R from 'ramda'

import { CommentModel, CommentsState, CommentsStateKey } from './comments.models'
import { AddComment, CommentsActionType } from './comments.actions'

const initialState: CommentsState = {
  [CommentsStateKey.ITEMS]: []
}

function addComment(state: CommentsState, action: AddComment) {
  const appendComment = R.append(action.payload.data)
  const itemsLens = R.lensProp(CommentsStateKey.ITEMS)
  const items = R.view<CommentsState, CommentModel[]>(itemsLens, state)

  return R.set(itemsLens, appendComment(items), state)
}

export function commentsReducer(state: CommentsState = initialState, action: Action = { type: null }): CommentsState {
  switch (action.type) {
    case CommentsActionType.ADD: return addComment(state, action as AddComment)
    default: return state
  }
}
