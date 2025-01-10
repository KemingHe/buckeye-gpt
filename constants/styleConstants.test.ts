import * as styleConstants from '@/constants/styleConstants';

describe('Style constants', () => {
  it('matches the latest snapshot', () => {
    expect(styleConstants).toMatchSnapshot();
  });
});
