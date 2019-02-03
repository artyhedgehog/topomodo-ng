import { commentsReducer } from './comments.reducer'
import { CommentModel, CommentModelKey, CommentsState, CommentsStateKey } from './comments.models'
import { AddComment } from './comments.actions'

describe('commentsReducer', () => {
  it('provides default state', () => {
    expect(commentsReducer()).toHaveProperty(CommentsStateKey.ITEMS)
  })

  it('returns unmodified state for no action', () => {
    const state: CommentsState = {
      [CommentsStateKey.ITEMS]: [
        { text: 'A comment' },
        { text: 'One more comment' }
      ]
    }
    const resultState = commentsReducer(state)

    expect(resultState).toBe(state)
    expect(resultState).toMatchSnapshot()
  })

  it('returns unmodified state for unknown action', () => {
    const state: CommentsState = {
      [CommentsStateKey.ITEMS]: [
        { text: 'A comment' },
        { text: 'One more comment' }
      ]
    }
    const resultState = commentsReducer(state, { type: 'Definitely unknown action' })

    expect(resultState).toBe(state)
    expect(resultState).toMatchSnapshot()
  })

  describe('on AddComment', () => {
    let originalComments: CommentModel[]
    let commentToAdd: CommentModel
    let action: AddComment
    let originalState: CommentsState
    let resultState: CommentsState

    beforeEach(() => {
      commentToAdd = { [CommentModelKey.TEXT]: 'New added comment' }
      action = AddComment.of({ data: commentToAdd })
      originalComments = [
        { [CommentModelKey.TEXT]: 'A comment' },
        { [CommentModelKey.TEXT]: 'One more comment' },
      ]
      originalState = {
        [CommentsStateKey.ITEMS]: originalComments
      }
      resultState = commentsReducer(originalState, action)
    })

    it('leaves old state unchanged', () => {
      expect(originalState).toMatchSnapshot()
    })

    it('adds a comment to result state', () => {
      expect(resultState).toHaveProperty([CommentsStateKey.ITEMS], [
        ...originalComments,
        commentToAdd
      ])
    })
  })
})
