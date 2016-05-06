export class AviRaceTrackerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('avi-race-tracker-app h1')).getText();
  }
}
