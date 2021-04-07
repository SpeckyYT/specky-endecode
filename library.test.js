const assert = require('assert');
const endecode = require('.');

it('should check if the endecoded text is constant', () => {
    const examples = [
        [ 'abc', 'zdY' ],
        [ 'ok', ';u' ],
        [
            'the quick brown fox jumps over the lazy dog',
            '%us 4RyI. *:AZS ,>v rc"§r S€qS |FQ j|fY Gbn'
        ],
        [
            'this module is dumb',
            'Z`{0 G>:7|w ~= 18&H'
        ],
        [
            'this\nis\njust\na\ntest\nto\nsee\nif\nnew\nlines\nwork',
            '´([i\n5&\n~T`c\n7\ne#lN\n1T\nQsk\nk(\nZ°j\n(`HY^\nBD1u'
        ],
    ];

    for(const [normal, encoded] of examples){
        assert.strictEqual(normal, endecode(encoded));
        assert.strictEqual(encoded, endecode(normal));
    }
})

it('should test the stability of the endecoder', () => {
    const chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(
        let str = '';
        str.length <= 50;
        str += chars[Math.floor(Math.random()*chars.length)]
    ) assert.strictEqual(str, endecode(endecode(str)))
})
