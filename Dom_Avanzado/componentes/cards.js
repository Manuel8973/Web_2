import tabla from './tabla.js';
const cards = (()=>{
    const taskCards = document.getElementById('taskCards');
    const updateCard=()=>{
        const task = tabla.getTasks();
    taskCards.innerHTML = ''; //limpio el contenido de taskCards

    //crear card por cada tarea

    task.forEach((task)=>{
        const card = document.createElement('div');
        card.className = 'taskCard';
        card.innerHTML = `
        <p><strong>Nombre:</strong> ${task.task}</p>    
        <p><strong>Descripcion:</strong> ${task.description}</p>
        <p><strong>Fecha:</strong> ${task.date}</p>
        <p><strong>Prioridad:</strong> ${task.prioridad}</p>
        <p><strong>Estado:</strong> ${task.completed} 'completada' : 'pendiente' </p>
        `;
        taskCards.appendChild(card);
    });
    };
    //exporto la funcion updateCard
    return{
        updateCard,
    };
})();
//exporto la funcion cards
export default cards;