import Form from './componentes/formulario.js';
import tabla from './componentes/tabla.js';
import cards from './componentes/cards.js';
//recupero los datos del formulario
(()=>{
    Form.setDatos((task)=>{
        tabla.addTask(task);
        cards.updateCard();
    });
    //recupero los datos de la tabla
})(); 