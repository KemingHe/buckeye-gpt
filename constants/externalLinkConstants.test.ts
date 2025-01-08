import * as externalLinkConstants from '@/constants/externalLinkConstants';

describe('external link constants', () => {
  it('matches the latest snapshot', () => {
    expect(externalLinkConstants).toMatchSnapshot();
  });
});
