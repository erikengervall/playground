import { getLongWordsRightToLeft } from './gist-exercise'

describe('iterative-gist', () => {
  it('getLongWordsRightToLeft', () => {
    expect(
      getLongWordsRightToLeft(
        'hello this is a sentence that contains a few words that are suuuuper long but not toooooo long'
      )
    ).toMatchInlineSnapshot(`"toooooo, suuuuper, contains, sentence"`)
  })
})
