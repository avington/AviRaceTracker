import { AviRaceTrackerPage } from './app.po';

describe('avi-race-tracker App', function() {
  let page: AviRaceTrackerPage;

  beforeEach(() => {
    page = new AviRaceTrackerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('avi-race-tracker works!');
  });
});
