const copyIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-copy', 'copyIcon', 'icon');
    i.addEventListener('click', copiarTarea); // Cambiamos copyTask a copiarTarea
    return i;
}

const copiarTarea = (evento) => { 
    const parent = evento.target.parentElement;
    const list = document.querySelector('[data-list]'); // Seleccionamos la lista   
    const newTask = parent.cloneNode(true); 
    list.appendChild(newTask);
}

export default copyIcon;
