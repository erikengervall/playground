export function getLongWordsRightToLeft(sentence: string): string {
  const sanitizedSentence = sentence.trim().toLocaleLowerCase()
  const words = sanitizedSentence.split(' ')
  const sanitizedWords = words.map(word => word.trim())
  const longWords = sanitizedWords.filter(word => word.length > 5)
  const longWordsRightToLeft = longWords.reverse()

  return longWordsRightToLeft.join(', ')
}
