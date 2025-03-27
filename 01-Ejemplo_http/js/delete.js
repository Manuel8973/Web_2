const deleteData=()=>{  // Función para eliminar un post
    fetch(`${API_URL}/1`,{   // Se hace la petición delete al post con id 1
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => {     // Se maneja la respuesta de la petición
        if(response.ok){
            throw new Error(`Error en la petición post el estado es: ${response.status}`);
        }
        showresult({    // Si la petición es exitosa se llama a la función showResult con un objeto
            message: "Post eliminado con éxito",    // Mensaje de éxito
            status: response.status
        });
    }).catch(error => showResult(error.message,true));    // Si la petición falla se llama a la función showResult con el error
};