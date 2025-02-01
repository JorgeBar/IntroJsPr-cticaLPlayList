const input1 = 'string';

const Rev3rs3 = (input) => {
    
    const cambio = input.split("")
    cambio.push('6  ');
    cambio.reverse();
    
    
    return `${cambio.join('')}`;
}
console.log(Rev3rs3(input1));

const input2 = 'variable';

const Rev3rs32 = (input) => {
    
    const cambio = input.split("")
    cambio.push('8  ');
    cambio.reverse();
    
    
    return `${cambio.join('')}`;
}
console.log(Rev3rs32(input2));

const input3 = 'pointer';

const Rev3rs323 = (input) => {
    
    const cambio = input.split("")
    cambio.push('7  ');
    cambio.reverse();
    
    
    return `${cambio.join('')}`;
}
console.log(Rev3rs323(input3));
