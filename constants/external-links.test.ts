import * as externalLinks from '@/constants/external-links';

describe('external links', () => {
  it('matches the latest snapshot', () => {
    expect(externalLinks).toMatchSnapshot();
  });
});
