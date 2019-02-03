import { Action } from '@ngrx/store'

import { CommentModel } from './comments.models'

export enum CommentsActionType {
  ADD = '[Comments] Add'
}

export interface AddCommentPayload {
  data: CommentModel
}

export class AddComment implements Action {
  readonly type = CommentsActionType.ADD

  static of(payload: AddCommentPayload): AddComment {
    return new AddComment(payload)
  }

  protected constructor(public readonly payload: AddCommentPayload) {}
}


