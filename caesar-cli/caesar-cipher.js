module.exports = (str, action, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const maxshift = alphabet.length;

    shift = shift % maxshift; // normalize shift for |shift| >= maxshift
    if(shift < 0)
        shift += maxshift; // normalize shift for shift < 0

    if(action == 'decode')
        shift = -shift;

    return Array.from(str).map( (c) => {
        const c_lower = c.toLowerCase();
        const index = alphabet.indexOf(c_lower);
        if(index < 0)
            return c;
        let new_index = (index + shift) % maxshift;
        if(new_index < 0) // for decode
            new_index += maxshift;

        return c == c_lower ? alphabet[new_index] : alphabet[new_index].toUpperCase();
    }).join('');
}