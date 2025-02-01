//!
/*
const estudiante = {
    nombre: "Antonio",
    edad: 20,
    asignaturas: [
        "mates", 
        "lengua",
        "conomicmiento",
        "latin",
        "griego"
    ]
 
}

estudiante.asignaturas.push("frances");
estudiante.edad += 1;
console.log(estudiante);


//2
const Productos =  [
    {
        nombre : "Portatil",
        precio : 1000,
        cantidad : 2
    },
    {
        nombre: "Coche",
        precio: 20000,
        cantidad : 3
    }
]

Productos.forEach(function(producto){
   
    const total = producto.precio * producto.cantidad
    console.log(`El total de ${producto.nombre} es: $${total}`);

} ); 

Productos.push({nombre: "Pelota",
    precio: 30,
    cantidad:8
})


console.log(Productos);

//3

const Coche = {
    marca: "Audi",
    modelo: "A3",
    año: 2015,
    encendido: true
}

function  manipulador(Coche){
    if (Coche.encendido === true){
        Coche.encendido = false

    }else{
        Coche.encendido = true
    }
};
Coche.kilometraje = 0;
manipulador(Coche)
console.log(Coche);

//
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];
const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    // Verificamos si el elemento es un número y no NaN
    if (typeof numbers[i] === "number") {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        } else {
            oddNumbers.push(numbers[i]);
        }
    }
}

console.log(`Estos son los pares: ${evenNumbers}`);
console.log(`Estos son los impares: ${oddNumbers}`);


// 
*/

const arrayPrim = [
    ["-","-","*","-","-"],
    ["-","*","*","*","-"],
    ["*","*","*","*","*"]
];



for ( let filas = 0 ; filas<arrayPrim.length ; filas ++){
   
        for(let columnas = 0 ; columnas<arrayPrim[filas].length; columnas++){
           
        }
       
        console.log(arrayPrim[filas].join(""))
    }

const counter = () => {
    let count = 0;

    const increment = () => {
        count = count + 1;
    };
        
    const getCount = () => {
        return count;
    };
        
    return {
        increment,
        getCount,
    };
};    

const jugador1 = counter();
const jugador2 = counter();
jugador1.increment()
jugador1.increment()
jugador2.increment()
console.log(jugador2.getCount());
console.log(jugador1.getCount());


const products = [
    {id : 'p001', name: 'T-shirt' , price: 20 , quantity: 2},
    {id : 'p002', name: 'Cap' , price: 5 , quantity: 3},
    {id : 'p003', name: 'Pants' , price: 50 , quantity: 1}
];


const cart = () => {

    let products = [];

    const addProduct = ({name , price ,quantity}) => {
       /* products.push({
            name,
            price,
            quantity,
        })*/
       //products = products.concat({name ,price , quantity})
       products = [...products, {
        name,
        price,
        quantity,
       }]
    };

    const getProduct = () => {
        return products;
    };

    return {
        addProduct,
        getProduct,
    };
}

const shoppingBag1 = cart();
shoppingBag1.addProduct(products[0]);


const shoppingBag2 = cart();
shoppingBag2.addProduct(products[1]);
shoppingBag2.addProduct(products[1]);

console.log(shoppingBag1.getProduct());
console.log(shoppingBag2.getProduct());

console.log('-------------------------------')

const calculadora = () => {
    let result = 0

    const suma = (input)=>{
         result = result + input
    };
    const resta = (input)=>{
        result = result - input
    };
    const mutiplicar = (input)=>{
        result = result * input
    };
    const dividir = (input)=>{
        result = result / input
    };
    const getTotal = ()=>{
        return result;
    };
    return {
        suma,
        resta,
        mutiplicar,
        dividir,
        getTotal
    }
};

const miCalculadora = calculadora();

console.log(miCalculadora.suma(5))  
console.log(miCalculadora.resta(2))
console.log(miCalculadora.mutiplicar(4))
console.log(miCalculadora.dividir(2))
console.log(miCalculadora.suma(10))
console.log(miCalculadora.getTotal());

/*
const sumar = (a,b) =>{
 let result = 0;
 result = a + b;
 return result;
}
console.log(sumar(3,3))

*/

console.log('-------------------------------')

const numbers = [1,2,3,4,5];

let newList = [];

for (let number of numbers){
    newList.push(number *2)
    
}
console.log(newList.join(""));

console.log("Probamos con map ahora")
//map

const NewListWithMap = numbers.map((number) =>{   //mas abreviada seria const newListWithMap = number.map(number => number *2)
    return number *2 
});

const FilterList = numbers.filter(number => number > 2);


console.log(NewListWithMap);
console.log(FilterList);

console.log('-------------------------------')
console.log('-------------------------------')
console.log('-------------------------------')

const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      year: 1967,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
  ];

const books2000 = books.filter (books => books.year >2000)
.map(books => books.title)
.join(', ')


//books2000 = books2000.map( books => books.title)

console.log(`El listado es : ${books2000}`);