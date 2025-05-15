import { supabaseRequest, generarId } from './supabase-config.js';

const lista_clientes = async () => {
    try {
        return await supabaseRequest('/clientes?select=*');
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        throw error;
    }
};

const crearCliente = async (nombre, email) => {
    const id = generarId(); // Generamos el ID en el cliente
    try {
        return await supabaseRequest('/clientes', {
            method: 'POST',
            body: JSON.stringify({ id, nombre, email })
        });
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        throw error;
    }
};

const eliminarCliente = async (id) => {
    try {
        return await supabaseRequest(`/clientes?id=eq.${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        throw error;
    }
};

const clientes = async (id) => {
    try {
        const response = await supabaseRequest(`/clientes?id=eq.${id}&select=*`);
        return response[0]; // Supabase siempre devuelve un array
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        throw error;
    }
};

const actualizarCliente = async (nombre, email, id) => {
    try {
        return await supabaseRequest(`/clientes?id=eq.${id}`, {
            method: 'PATCH', // Supabase usa PATCH para actualizaciones
            body: JSON.stringify({ nombre, email })
        });
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        throw error;
    }
};

export const clientServiceSupa = {
    lista_clientes,
    crearCliente,
    eliminarCliente,
    clientes,
    actualizarCliente
};