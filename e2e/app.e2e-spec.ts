import { Angular2HandsonPage } from './app.po';

describe('angular2-handson App', function() {
  let page: Angular2HandsonPage;

  beforeEach(() => {
    page = new Angular2HandsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
