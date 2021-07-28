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

## Benchmark

```console
npm run benchmark
```
```js
2^0 (1 characters) x 118,839 ops/sec ±2.85% (85 runs sampled)
2^1 (2 characters) x 78,256 ops/sec ±1.37% (89 runs sampled)
2^2 (4 characters) x 53,342 ops/sec ±1.42% (88 runs sampled)
2^3 (8 characters) x 28,447 ops/sec ±1.65% (82 runs sampled)
2^4 (16 characters) x 18,068 ops/sec ±1.48% (86 runs sampled)
2^5 (32 characters) x 7,668 ops/sec ±1.98% (86 runs sampled)
2^6 (64 characters) x 3,934 ops/sec ±1.10% (90 runs sampled)
2^7 (128 characters) x 2,161 ops/sec ±0.99% (90 runs sampled)
2^8 (256 characters) x 1,031 ops/sec ±1.67% (90 runs sampled)
2^9 (512 characters) x 481 ops/sec ±4.28% (83 runs sampled)
2^10 (1024 characters) x 240 ops/sec ±1.94% (84 runs sampled)
2^11 (2048 characters) x 117 ops/sec ±3.40% (72 runs sampled)
2^12 (4096 characters) x 51.47 ops/sec ±7.28% (54 runs sampled)
2^13 (8192 characters) x 19.35 ops/sec ±11.06% (39 runs sampled)
2^14 (16384 characters) x 13.28 ops/sec ±5.45% (38 runs sampled)
2^15 (32768 characters) x 7.17 ops/sec ±2.23% (22 runs sampled)
2^16 (65536 characters) x 3.72 ops/sec ±3.12% (14 runs sampled)
```
