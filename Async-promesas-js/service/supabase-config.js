const SUPABASE_URL = 'https://vsrpmmjyhffquymwflkj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzcnBtbWp5aGZmcXV5bXdmbGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMTYzMDksImV4cCI6MjA2Mjg5MjMwOX0.854h5ubJCBnMv_d1ITDyEYACr4eeBztt40K0KUYHtYE';

function generarId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Función simple para realizar peticiones a Supabase
const supabaseRequest = async (endpoint, options = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
    };

    const response = await fetch(`${SUPABASE_URL}/rest/v1${endpoint}`, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers
        }
    });

    if (!response.ok) {
        throw new Error(`Error Supabase: ${response.statusText}`);
    }

    // Para peticiones que no devuelven datos (DELETE)
    if (response.status === 204) {
        return { success: true };
    }

    return response.json();
};

export { supabaseRequest, generarId };