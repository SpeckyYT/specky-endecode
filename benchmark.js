const encode = require('.');

for(let a = 1; a < 10**8; a *= 10){
    const start = new Date();
    const text = 'Not sure what to insert here.' && Array(a).fill('A').join('')
    const encoded = encode(text);   // i[% G=3` !{<§ f_ ~|h#fL +Q?Z)
    const normal = encode(encoded); // Not sure what to insert here.
    const end = new Date();
    console.log(`${a.toString().padEnd(10,' ')} ${end-start}ms`)
}
