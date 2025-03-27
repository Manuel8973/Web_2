const putData = () => {     // Función para actualizar un post
    const udpateData = {
        titulo: "Actualización de post",
        descripcion: "Actualización de descripción",
        fecha: new Date().toISOString()
    };
    fetch(`${API_URL}/1`, {    // Se hace la petición put al post con id 1
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(udpateData)
    })
    .then(response => {  
        if(response.ok){
            throw new Error(`Error en la petición post el estado es: ${response.status}`);
        }
        return response.json();     
    }).then(data => showResult(data))   // Si la petición es exitosa se llama a la función showResult
    .catch(error => showResult(error.message,true));    // Si la petición falla se llama a la función showResult con el error
}