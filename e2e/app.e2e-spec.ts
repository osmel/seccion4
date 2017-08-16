import { Seccion4Page } from './app.po';

describe('seccion4 App', function() {
  let page: Seccion4Page;

  beforeEach(() => {
    page = new Seccion4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
