/**
 * The word counter module.
 *
 * @param {string} words The words to count.
 */
export function countWords(words) {
  console.log(words)
  words.trim()

  // Get last character and index of the given string.
  const lastCharacter = words.slice(-1)
  const lastIndex = words.lastIndexOf(lastCharacter)

  // Count the words.
  let countedWords = 0
  for (let i = 0; i < words.length; i++) {
    if(words[i] === " ") {
      countedWords++
    }

    // If the last character is the same as the last character in the string.
    if (words[i] === lastCharacter && i === lastIndex) {
      countedWords++
    }
  }

  return countedWords
}