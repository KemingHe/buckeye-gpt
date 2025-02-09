import * as apiEndpoints from '@/constants/api-endpoints';

describe('API endpoints', () => {
  it('matches the latest snapshot', () => {
    expect(apiEndpoints).toMatchSnapshot();
  });
});
