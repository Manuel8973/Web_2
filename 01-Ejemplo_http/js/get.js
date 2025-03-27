const API_URL= 'http://localhost:3000/posts';   // Este enlace eh recuperado de la consola de la terminal al iniciar el servidor con el comando json-server --watch db.json

const getData = () => {   // Función que se encarga de hacer la petición get
    fetch(API_URL)  
    .then(response => {
        if(response.ok){    // Si la petición es exitosa
            throw new Error(`Error en la petición get el estado es: ${response.status}`);   
        }
        return response.json();
    })
    .then(data => showResult(data))     // Si la petición es exitosa se llama a la función showResult
    .catch(error => showResult(error.message,true));    // Si la petición falla se llama a la función showResult con el error  
}
