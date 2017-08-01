import { WbwebPage } from './app.po';

describe('wbweb App', () => {
  let page: WbwebPage;

  beforeEach(() => {
    page = new WbwebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
