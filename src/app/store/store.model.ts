import { CommentsState } from './comments'

export enum StoreFeature {
  COMMENTS = 'comments'
}

export interface AppState {
  [StoreFeature.COMMENTS]: CommentsState
}
