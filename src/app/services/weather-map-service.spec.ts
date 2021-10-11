import { TestBed } from '@angular/core/testing';

import { WeatherMapService } from './weather-map.service';

describe('WeatherMapServiceService', () => {
  let service: WeatherMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
