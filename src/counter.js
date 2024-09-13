// @ts-nocheck
/**
 * The word counter module.
 *
 * @param {string} words The words to count.
 */
export class Counter {
  /**
   * Remove dot from string.
   *
   * @param {string} string The string.
   * @returns {string} String without dots.
   */
  removeDotFromString (string) {
    const stringWithoutDots = string.replaceAll('.', ' ')

    return stringWithoutDots
  }

  /**
   * The word counter module.
   *
   * @param {string} words The words to count.
   * @returns {number} Number of words.
   */
  words (words) {
    const wordsWithoutDot = this.removeDotFromString(words)
    console.log(wordsWithoutDot)
    wordsWithoutDot.trim()

    // Get last character and index of the given string.
    const lastCharacter = wordsWithoutDot.slice(-1)
    const lastIndex = wordsWithoutDot.lastIndexOf(lastCharacter)

    // Count the words.
    let countedWords = 0
    for (let i = 0; i < wordsWithoutDot.length; i++) {
      if (wordsWithoutDot[i] === ' ') {
        countedWords++
      }

      // If the last character is the same as the last character in the string.
      if (wordsWithoutDot[i] === lastCharacter && i === lastIndex) {
        countedWords++
      }
    }

    return countedWords
  }

  /**
   * Count sentences in a string.
   *
   * @param {string} string string of sentences.
   * @returns {number} number of sentences.
   */
  sentences (string) {
    let numberOfSentences = 0

    for (let i = 0; i < string.length; i++) {
      if (string[i] === '.') {
        numberOfSentences++
      }
    }

    return numberOfSentences
  }
}
