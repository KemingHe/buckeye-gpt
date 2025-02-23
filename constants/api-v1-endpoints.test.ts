import * as apiEndpoints from '@/constants/api-v1-endpoints';

describe('API V1 endpoints', () => {
  it('starts with /api/v1/', () => {
    const endpoints = Object.values(apiEndpoints);
    for (const endpoint of endpoints) {
      expect(endpoint).toMatch(/^\/api\/v1\//);
    }
  });

  it('matches the latest snapshot', () => {
    expect(apiEndpoints).toMatchSnapshot();
  });
});
