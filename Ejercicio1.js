const objeto = {
    Nombre: "Jorge",
    Apellidos: "Barroso",
    Asignaturas: [ 
       { nombre: "Node.js", fecha: "2024-12-23"},
       { nombre: "Git", fecha: "2025-09-23"},
       { nombre: "React", fecha: "2024-10-23"},

      

    ],
    "Busqueda" : true

};

console.log(objeto.Asignaturas[2].fecha);