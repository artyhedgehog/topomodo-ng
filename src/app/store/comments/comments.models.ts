export enum CommentModelKey {
  TEXT = 'text'
}

export interface CommentModel {
  [CommentModelKey.TEXT]: string
}

export enum CommentsStateKey {
  ITEMS = 'items'
}

export interface CommentsState {
  [CommentsStateKey.ITEMS]: CommentModel[]
}
