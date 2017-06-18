import { TaskCounterPage } from './app.po';

describe('task-counter App', () => {
  let page: TaskCounterPage;

  beforeEach(() => {
    page = new TaskCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
