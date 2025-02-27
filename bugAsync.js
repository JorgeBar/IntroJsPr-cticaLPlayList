



 async function  obtenerUsuario(id) {

    return new Promise((resolve, reject)=>{
    
        setTimeout(()=>{
            let usuario;
            if (id === 1){
                usuario ={id: 1, nombre: 'John Doe'};
                resolve(usuario);
            }else{
                reject('Error: Usuario no encontrado')
            }
            
        },2000);
        
    })
   
}

async function getUser(){

    try{
        const  usuario = await obtenerUsuario(1);
        console.log(usuario);
    }
    catch(error){
        console.log(error)
    }

}
getUser();


