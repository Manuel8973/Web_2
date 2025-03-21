const Form = (()=>{
    //recuperando data de formulario 
const _form = document.querySelector('[data-form]');//formulario
const _inputTask = document.querySelector('[data-input-tas]');
const inputDescription = document.querySelector('[data-input-description]');
const date = document.querySelector('[data-input-date]');
const inputPrioridad = document.querySelector('[data-input-prioridad]');

//guardo los datos como objeto
const datosForm =() => {
    return{
        task: _inputTask.value.trim(),
        description: inputDescription.value.trim(),
        date: date.value.trim(), 
        prioridad: inputPrioridad.value.trim(), 
    };
};
// limpio los campos del formulario
const reset = ()=>{
    inputTask.value = "";
    inputDescription.value = "";
    date.value = "";
    inputPrioridad.value = "";

};
// devuelvo los datos para usarlos en otro archivo
const setDatos =(callback)=>{
        form.addEventListener('submit',(evento)=>{
        evento.preventDefault(); 
        callback(datosForm()); 
        reset();
    });
};
//exporto la funcion setDatos
return{
    setDatos,
};
})();

export default Form; 