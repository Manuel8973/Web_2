import cards from './cards.js';
//creo una funcion tabla
const tabla =(()=>{ 
    const cuerpoTabla = document.getElementById('tasksTable').getElementsByTagName('tbody')[0];
    const addTask = (task)=>{
        const nuevaFila = cuerpoTabla.insertRow(); //creo una nueva fila
        nuevaFila.insertCell(0).textContent = task.task; //inserto la tarea en la celda 0
        nuevaFila.insertCell(1).textContent = task.description; //inserto la descripcion en la celda 
        nuevaFila.insertCell(2).textContent = task.date; //inserto la fecha en la celda
        nuevaFila.insertCell(3).textContent = task.prioridad; //inserto la prioridad en la celda          

        const accionCell = nuevaFila.insertCell(4); //creo una nueva celda para las acciones
        const accions = document.createElement('div');
        accions.className = 'actions'

        //crear boton de editar

        const completeBotton = document.createElement('button');
        completeBotton.textContent = 'Completar';
        completeBotton.className = 'view';
        completeBotton.addEventListener('click',()=>{
            nuevaFila.classList.toggle('completed');
            ///
            cards.updateCard();
            ///
        });
        accions.appendChild(completeBotton);

        //crear boton de eliminar
        const deleteBotton = document.createElement('button');
        deleteBotton.textContent = 'Eliminar';
        deleteBotton.className = 'delete';
        deleteBotton.addEventListener('click',()=>{
            cuerpoTabla.deleteChild(nuevaFila.rowIndex-1);
            ////
            cards.updateCard();
            ////
        });
        accions.appendChild(deleteBotton);
        accionCell.appendChild(accions);
    };
//recupero elementos de la tabla y los guardo en un array
    const getTasks = (tasks) =>{
        return Array.from(cuerpoTabla.rows).map(row=>({
            task: row.cells[0].textContent,
            description: row.cells[1].textContent,
            date: row.cells[2].textContent,
            compled: row.classList.contains('completed'),
            
        }));    
    };
    //exporto las funciones
    return{
        addTask,
        getTasks,
    }

})();
//exporto la funcion tabla
export default tabla; 