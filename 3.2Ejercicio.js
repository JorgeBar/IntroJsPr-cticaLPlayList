const input = 10;

const cambiaraString = (input) => {
    const cambio = input.toString().split("").join('-');
    return cambio;
};

console.log(cambiaraString(input));


const secondInput = 1;

console.log(cambiaraString(secondInput))

const thirdInput = 11234;

console.log(cambiaraString(thirdInput))