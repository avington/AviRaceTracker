import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AviRaceTrackerAppComponent } from '../app/avi-race-tracker.component';

beforeEachProviders(() => [AviRaceTrackerAppComponent]);

describe('App: AviRaceTracker', () => {
  it('should create the app',
      inject([AviRaceTrackerAppComponent], (app: AviRaceTrackerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'avi-race-tracker works!\'',
      inject([AviRaceTrackerAppComponent], (app: AviRaceTrackerAppComponent) => {
    expect(app.title).toEqual('avi-race-tracker works!');
  }));
});
