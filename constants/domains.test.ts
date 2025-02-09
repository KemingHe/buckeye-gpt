import * as domains from '@/constants/domains';

describe('Domains', () => {
  it('matches the latest snapshot', () => {
    expect(domains).toMatchSnapshot();
  });
});
