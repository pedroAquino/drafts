import { PocAppPage } from './app.po';

describe('poc-app App', () => {
  let page: PocAppPage;

  beforeEach(() => {
    page = new PocAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
