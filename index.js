const { floor, cos, tan, abs } = Math;

const endecode = (input, log) => {
    input = input || '';

    const chars1 = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()[]{}!\"§$%&/=?`´*-+<>\\#'_^°~,.;:|@€"];
    const chars2 = [];

    if(chars1.length % 2) chars1.pop();

    const whitespaces = [' ','\n'];

    const spacont = [...input]
    .filter(v => [...chars1,...whitespaces].includes(v))
    .join('')
    .trim()
    .replace(/(\s|\n)+/g,'$1')
    .split('');

    const content = [...spacont]
    .filter(v => chars1.includes(v))
    .join('');

    const getIndex = (letter) =>
        chars1.includes(letter) ? chars1.indexOf(letter) : (chars2.includes(letter) ? chars2.indexOf(letter) : 0);

    const getOppositeLetter = (letter) =>
        chars1.includes(letter) ? chars2[getIndex(letter)] : (chars2.includes(letter) ? chars1[getIndex(letter)] : '');

    const change = (eq1,eq2) => {
        eq1 = floor(isNaN(eq1) ? 0 : abs(eq1)) % chars1.length;
        eq2 = floor(isNaN(eq2) ? 0 : abs(eq2)) % chars2.length;
        [chars1[eq1],chars2[eq2]] = [chars2[eq2],chars1[eq1]];
    }

    // Will pick some random characters from the first array and pushes it to the second one
    for(let i = 0; chars2.length < chars1.length; i++){
        const pos = (content.length * 5 + floor(chars1.length / 2) + i*i) % chars1.length;
        chars2.push(chars1[pos]);
        chars1.splice(pos,1);
    }

    if(log) console.table([chars1,chars2]);

    let output = '';

    [...content].forEach((v,i) => {
        // Gets the letter from one or the other array
        const char = getIndex(v);
        output += getOppositeLetter(v);

        // Manages white spaces
        if(whitespaces.includes(spacont[output.length])){
            output += spacont[output.length];
        }

        // This will shift the second array after each requested letter
        chars2.unshift(chars2[chars2.length-1]);
        chars2.pop();
        // This will push the first array after every 2 requested letters (but not the 3th)
        if(i % 3){
            chars1.push(chars1[0]);
            chars1.shift();
        }

        // This shuffles the arrays for the character's position
        // (changing one letter may result in total chaos after it)
        for(let j = 0; j < char; j++){
            change(
                j,
                char
            );
            change(
                j^(chars1.length-1),
                j
            );
            change(
                j*j+(chars1.length/2),
                j*4+(chars2.length/3)
            );
        }
        // This shuffles the arrays with some arbitrary formulas
        change(0,i+1);
        change(i+2,i+5);
        change(i*3,i*5);
        change(i+1,i*2);
        change(i*i,i*8);
        change(tan(i*7)*50,i*3);
        change(i%3*7,(i*420/69+45)/16);
        change(cos(i*7)*chars1.length,chars2.length-1);

        // Log
        if(log){
            console.log(i);
            console.table([chars1,chars2]);
        }
    });

    return output;
}

module.exports = endecode
