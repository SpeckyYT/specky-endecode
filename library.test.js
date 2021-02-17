const encode = require('.');

const text = 'Not sure what to insert here.';
const encoded = encode(text);   // i[% G=3` !{<§ f_ ~|h#fL +Q?Z)
const normal = encode(encoded); // Not sure what to insert here.

console.log(text);
console.log(encoded);
console.log(normal);

if (text != normal) {
    throw new Error("Doesn't work lmao");
} else {
    console.log('Works!');
}
