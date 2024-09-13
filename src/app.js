/**
 * Hello World starter application.
 */
import { helloWorld } from './hello-world.js'
import { countWords } from './word-counter.js'

let STRING_TO_COUNT_WORDS = "Hej, jag försöker lära mig att programmera. Jag tycker att det är jättekul!"

/**
 * 
 * FIRST PROBLEM.
 * 
 */

// If command is entered, display hello world a tihrd time.
const argumentOrDefault = process.argv[2] ? process.argv[2] : STRING_TO_COUNT_WORDS

console.log(countWords(argumentOrDefault))
