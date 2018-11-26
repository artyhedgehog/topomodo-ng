import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppMainPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getAddCommentInput() {
    return element(by.css('app-root .add-comment__text-input'));
  }

  getAddCommentSubmit() {
    return element(by.css('app-root .add-comment__submit-button'));
  }

  getComments(): ElementArrayFinder {
    return element.all(by.css('app-root .comments-list__comment-text'));
  }
}
