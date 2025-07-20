import axios from 'axios';

// Usar la variable de entorno definida en .env
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// URLs de las APIs
const USERS_API_URL = `${BASE_URL}/api/users`;
const CLIENTES_API_URL = `${BASE_URL}/api/clientes`;
const PROVEEDORES_API_URL = `${BASE_URL}/api/proveedores`;
const VENTAS_RECARGAS_API_URL = `${BASE_URL}/api/ventas-recargas`;

// **Funciones para USUARIOS**
export const getUsers = async () => {
    try {
        const response = await axios.get(USERS_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(USERS_API_URL, userData);
        return response.data;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${USERS_API_URL}/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${USERS_API_URL}/${id}`);
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
    }
};

// **Funciones para CLIENTES**
export const getClientes = async () => {
    try {
        const response = await axios.get(CLIENTES_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        return [];
    }
};

export const createCliente = async (clienteData) => {
    try {
        const response = await axios.post(CLIENTES_API_URL, clienteData);
        return response.data;
    } catch (error) {
        console.error('Error al crear cliente:', error);
        throw error;
    }
};

export const updateCliente = async (id, clienteData) => {
    try {
        const response = await axios.put(`${CLIENTES_API_URL}/${id}`, clienteData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        throw error;
    }
};

export const deleteCliente = async (id) => {
    try {
        await axios.delete(`${CLIENTES_API_URL}/${id}`);
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        throw error;
    }
};

// **Funciones para PROVEEDORES**
export const getProveedores = async () => {
    try {
        const response = await axios.get(PROVEEDORES_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener proveedores:', error);
        return [];
    }
};

export const createProveedor = async (proveedorData) => {
    try {
        const response = await axios.post(PROVEEDORES_API_URL, proveedorData);
        return response.data;
    } catch (error) {
        console.error('Error al crear proveedor:', error);
        throw error;
    }
};

export const updateProveedor = async (id, proveedorData) => {
    try {
        const response = await axios.put(`${PROVEEDORES_API_URL}/${id}`, proveedorData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar proveedor:', error);
        throw error;
    }
};

export const deleteProveedor = async (id) => {
    try {
        await axios.delete(`${PROVEEDORES_API_URL}/${id}`);
    } catch (error) {
        console.error('Error al eliminar proveedor:', error);
        throw error;
    }
};

// **Funciones para VENTAS y RECARGAS (unificadas)**
export const getVentasRecargas = async (tipo = '') => {
    try {
        const response = await axios.get(`${VENTAS_RECARGAS_API_URL}?tipo=${tipo}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener ventas o recargas:', error);
        return [];
    }
};

export const createVentaRecarga = async (ventaRecargaData) => {
    try {
        const response = await axios.post(VENTAS_RECARGAS_API_URL, ventaRecargaData);
        return response.data;
    } catch (error) {
        console.error('Error al crear venta o recarga:', error);
        throw error;
    }
};

export const updateVentaRecarga = async (id, ventaRecargaData) => {
    try {
        const response = await axios.put(`${VENTAS_RECARGAS_API_URL}/${id}`, ventaRecargaData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar venta o recarga:', error);
        throw error;
    }
};

export const deleteVentaRecarga = async (id) => {
    try {
        await axios.delete(`${VENTAS_RECARGAS_API_URL}/${id}`);
    } catch (error) {
        console.error('Error al eliminar venta o recarga:', error);
    }
};
