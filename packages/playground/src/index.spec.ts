import { main } from './index'

describe('index', () => {
  it('should match', () => {
    expect(main('wadup')).toEqual('wadup')
  })
})
