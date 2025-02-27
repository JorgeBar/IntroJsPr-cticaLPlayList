const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4'
]

const mostrarInput = (list) => {
const lastElement = list.length -1;
const extension = list[lastElement];
let newList = [...list];
newList.pop();
return `${newList.join('/')}.${extension}`;

};
console.log(mostrarInput(input1));

const input2 = [
    'CodingGame',
    'python',
    'py'
]

const mostrarInput2 = (input2) => {
   const ruta = input2.slice(0,-1).join('/');
   const extension = input2.slice(-1)[0];
   return `${ruta}.${extension}`;
}
console.log(mostrarInput2(input2))


const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]

const mostrarInput3 = (input3) => {
    const lastElement = input3.slice(0,-1).join('/');
    const extension = input3.slice(-1)[0];
    return `${lastElement}.${extension}`;

}

console.log(mostrarInput3(input3)

)