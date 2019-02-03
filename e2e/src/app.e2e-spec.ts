import { AppMainPage } from './app.po'

describe('ToPomoDo App', () => {
  let page: AppMainPage

  beforeEach(() => {
    page = new AppMainPage()
  })

  it('should have a header', () => {
    page.navigateTo()
    expect(page.getPageTitle()).toEqual('ToPomoDo App')
  })

  it('should display added comments', async () => {
    page.navigateTo()

    expect(page.getComments().map(c => c.getText())).toEqual([])

    const firstComment = 'My first comment text'

    page.getAddCommentInput().sendKeys(firstComment)
    page.getAddCommentSubmit().click()

    expect(page.getComments().map(c => c.getText())).toEqual([firstComment])

    const anotherThought = 'Another thought'

    page.getAddCommentInput().sendKeys(anotherThought)
    page.getAddCommentSubmit().click()

    const notSaved = 'Something I am not going to save'

    page.getAddCommentInput().sendKeys(notSaved)

    expect(page.getComments().map(c => c.getText())).toEqual([firstComment, anotherThought])
  })
})
