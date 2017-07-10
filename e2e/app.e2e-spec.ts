import { WeatherAppAngPage } from './app.po';

describe('weather-app-ang App', () => {
  let page: WeatherAppAngPage;

  beforeEach(() => {
    page = new WeatherAppAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
