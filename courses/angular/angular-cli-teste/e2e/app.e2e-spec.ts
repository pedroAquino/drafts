import { AngularCliTestePage } from './app.po';

describe('angular-cli-teste App', () => {
  let page: AngularCliTestePage;

  beforeEach(() => {
    page = new AngularCliTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
