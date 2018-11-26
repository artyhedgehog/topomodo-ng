import { AppMainPage } from './app.po';

describe('ToPomoDo App', () => {
  let page: AppMainPage;

  beforeEach(() => {
    page = new AppMainPage();
  });

  it('should have a header', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('ToPomoDo App');
  });

  it('should display added comments', async () => {
    page.navigateTo();

    const firstComment = 'My first comment text';

    page.getAddCommentInput().sendKeys(firstComment);
    page.getAddCommentSubmit().click();

    const anotherThought = 'Another thought';

    page.getAddCommentInput().sendKeys(anotherThought);
    page.getAddCommentSubmit().click();

    const notSaved = 'Something I am not going to save';

    page.getAddCommentInput().sendKeys(notSaved);

    const comments = page.getComments();

    expect(comments.map(comment => comment.getText())).toEqual([firstComment, anotherThought]);
  });
});
