import * as domainConstants from '@/constants/domainConstants';

describe('Domain constants', (): void => {
  it('matches the snapshot', (): void => {
    expect(domainConstants).toMatchSnapshot();
  });
});
