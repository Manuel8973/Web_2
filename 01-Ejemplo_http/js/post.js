const postData = ()=>{  //Funcion para enviar datos al servidor
    const newPost ={    // Objeto con los datos a enviar
        titulo: "Nuevo post",
        descripcion: "Nueva descripcion",
        fecha: new Date().toISOString()
    };
    fetch(API_URL,{    // Se hace la petición post
        method: 'POST', 
        headers: {  
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newPost)    // Se convierte el objeto a un string
    })
    .then(response => {   
        if(response.ok){
            throw new Error(`Error en la petición post el estado es: ${response.status}`);
        }
        return response.json();     
    }).then(data => showResult(data))   // Si la petición es exitosa se llama a la función showResult
    .catch(error => showResult(error.message,true));    // Si la petición falla se llama a la función showResult con el error
}