'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

function multiply(a,x){
    let result = 0;

    let a1 = a;
    let x1 = x;
    if (a<0){
        a1 = -a1
    }
    if (x<+0){
        x1 = -x1
    }


    for(var i = 0; i<a1; i++){

        result = result + x1;
    }
    if ( ((a<0)&&(x>0)) || ((x<0)&&(a>0)) ){
        result = -result;
    }

    return result;

}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
