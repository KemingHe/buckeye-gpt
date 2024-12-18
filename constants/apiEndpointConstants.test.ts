import * as endpoints from '@/constants/apiEndpointConstants';

describe('API endpoint constants', (): void => {
  it('matches the snapshot', (): void => {
    expect(endpoints).toMatchSnapshot();
  });
});
