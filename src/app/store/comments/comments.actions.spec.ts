import { AddComment, AddCommentPayload, CommentsActionType } from './comments.actions'
import { CommentModelKey } from './comments.models'

describe('AddCommentAction', () => {
  let payload: AddCommentPayload
  let action: AddComment

  beforeEach(() => {
    payload = {
      data: {
        [CommentModelKey.TEXT]: 'Comment text'
      }
    }
    action = AddComment.of(payload)
  })

  it('has factory method', () => {
    expect(action instanceof AddComment).toBeTruthy()
  })

  it('has corresponding type', () => {
    expect(action.type).toEqual(CommentsActionType.ADD)
  })

  it('has provided payload', () => {
    expect(action.payload).toEqual(payload)
  })
})
