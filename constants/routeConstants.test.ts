import * as routeConstants from '@/constants/routeConstants';

describe('Route constants', (): void => {
  it('matches the snapshot', (): void => {
    expect(routeConstants).toMatchSnapshot();
  });
});
