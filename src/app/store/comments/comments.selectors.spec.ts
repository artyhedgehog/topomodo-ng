import { AppState, StoreFeature } from '../store.model'
import { CommentModel, CommentModelKey, CommentsStateKey } from './comments.models'
import { getComments } from './comments.selectors'

describe('getComments', () => {
  it('provides an array', () => {
    const state = {}

    expect(getComments(state as AppState)).toBeArray()
  })

  it('picks comments from app state', () => {
    const comments: CommentModel[] = [
      { [CommentModelKey.TEXT]: 'One - personal space' },
      { [CommentModelKey.TEXT]: 'Two - personal space' },
      { [CommentModelKey.TEXT]: 'Three - get out of my personal space' },
    ]
    const state: AppState = {
      [StoreFeature.COMMENTS]: {
        [CommentsStateKey.ITEMS]: comments
      }
    }

    expect(getComments(state)).toEqual(comments)
  })
})
