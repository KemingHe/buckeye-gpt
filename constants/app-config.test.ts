import * as appConfig from '@/constants/app-config';

describe('App config constants', () => {
  it('matches the latest snapshot', () => {
    expect(appConfig).toMatchSnapshot();
  });
});
