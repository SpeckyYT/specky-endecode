const endecode = require('.');
const benchmark = require('benchmark');

const suite = new benchmark.Suite();

const BASE = 2;
const EXPONENT = 16;

for(let i = 0; i <= EXPONENT; i++){
    const text = Array(BASE**i).fill('A').join('');
    suite.add(`${BASE}^${i} (${BASE**i} characters)`, () => endecode(text));
}

suite
.on('cycle', event => console.log(String(event.target)))
.run();
