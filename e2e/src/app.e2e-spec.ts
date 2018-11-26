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
});
