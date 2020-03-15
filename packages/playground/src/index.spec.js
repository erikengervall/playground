const playground1 = require('./index')

describe('index', () => {
  it('should match', () => {
    expect(playground1('wadup')).toEqual('wadup')
  })
})
