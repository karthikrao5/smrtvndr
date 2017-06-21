import { SmrtvndrPage } from './app.po';

describe('smrtvndr App', () => {
  let page: SmrtvndrPage;

  beforeEach(() => {
    page = new SmrtvndrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
