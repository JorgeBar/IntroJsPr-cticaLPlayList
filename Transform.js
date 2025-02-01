const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            {id: 1 , nombre: 'Proyecto 1'},
            {id: 2, nombre: ' Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            {id: 3 , nombre: 'Proyecto 3'},
            {id: 4, nombre: ' Proyecto 4'}
        ]
    },
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            {id: 5 , nombre: 'Proyecto 5'},
            {id: 6, nombre: ' Proyecto 6'}
        ]
    }
]

// Sacar el listado de los desarrolladore que tengan como habilidad JavaScript => Juan. Y el listado de los proyectos en el que sus trabajadores trabajan => Proyecto 1 ,2 ,3 ,4 ,5, 6


const transform1 = datos.filter(datos => datos.habilidades.includes('JavaScript'))

console.log(transform1);

const transform2 = datos.filter(paso1 => paso1.proyectos)
 
 .map(paso2 => paso2.proyectos.map(paso3 => paso3.nombre))
 .flat()

 




 //.flatMap(paso3 => paso3.proyectos)


    //.map(datos =>  datos.proyectos.includes('Proyecto '))

console.log(transform2)


//muy importante el structureclone para copiar  const user2 = strucutredClone(user)*No copia funciones