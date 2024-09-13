// @ts-nocheck
/**
 * Hello World starter application.
 */
// import { helloWorld } from './hello-world.js'
import { countWords } from './word-counter.js'
import { Counter } from './counter.js'

const counter = new Counter()

let STRING_TO_COUNT_WORDS = "Hej!"

/**
 * 
 * FIRST PROBLEM.
 * 
 */

// If command is entered, display hello world a tihrd time.
const argumentOrDefault = process.argv[2] ? process.argv[2] : STRING_TO_COUNT_WORDS

console.log(countWords(""))
console.log('Word counter:')
console.log(counter.words('Hej hej . björnar bor i skogen. Korsordtävling. potatis.'))
console.log('Sentence counter:')
console.log(counter.sentences('Hej hej. björnar bor i skogen. Korsordtävling. potatis.'))
