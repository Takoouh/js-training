'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(word){
    let phrase = word.toLowerCase().split(' ');
    for (var i = 0; i < phrase.length; i++){
        phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].substring(1);
    }
    return phrase.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("how are you ?"), 'How Are You ?')
assert.strictEqual(jadenCase("How are you ?"), 'How Are You ?')

// End of tests */
