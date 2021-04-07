# Specky Endecode

## Installation
```
npm i specky-endecode
```

## Usage
```js
const endecode = require('specky-endecode');
const text = 'It will never get encoded.';  // dead meme
const encoded = endecode(text);             // K( ).€k IY"gg P%1 Rka#0;-T
const decoded = endecode(encoded);          // It will never get encoded.

const options = {
    characters: 'abcd', // has to be an even number of characters
    whitespaces: '\s\r\n',
    log: true,
};

const withOptions = endecode('abacaba', options); // bcdabcb
```

## Notes

The supported characters by default are the following:
```
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()[]{}!\"§$%&/=?`´*-+<>\\#'_^°~,.;:|@€
```

## Flaws

This system obviously has flaws, here are some I found:
- a character can't get output as itself
- if a character gets swapped with it's output, the characters after that won't get shuffled
- newlines and spaces don't change the outcome


## Benchmark (endecoded twice)
| String Length | Time      |
|---------------|-----------|
| 1             | 1ms       |
| 10            | 2ms       |
| 100           | 7ms       |
| 1000          | 24ms      |
| 10000         | 103ms     |
| 100000        | 903ms     |
| 1000000       | 9265ms    |
| 10000000      | 105133ms  |
| 100000000     | OOM Error |
