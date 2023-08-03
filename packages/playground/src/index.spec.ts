import { playground } from './index';

describe('index', () => {
  it('should match', () => {
    expect(playground('wadup 🤙🏼')).toEqual('wadup 🤙🏼');
  });
});
