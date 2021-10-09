import axios from 'axios';

const axiosClient =  process.env.REACT_APP_BACKEND_URL;

//Solicitudes

export const getSolicitudes = async (id) => {
    id = id || '';
    return await axios.get(`${axiosClient}/api/solicitudes/empleado/1`);//listar solo las solicitudes del usuario logeado
}

export const buscarSolicitudes = async (id) => {
    id = id || '';
    return await axios.get(`${axiosClient}/api/solicitudes/${id}`);
}

export const addSolicitud = async (solicitud) => {
    return await axios.post(`${axiosClient}/api/solicitudes/empleado`, solicitud);
}

export const deleteSolicitud = async (idSolicitud) => {
    return await axios.delete(`${axiosClient}/${idSolicitud}`);
}

export const editSolicitud = async (idSolicitud, solicitud) => {
    return await axios.put(`${axiosClient}/${idSolicitud}`, solicitud)
}

export const editEstadoSol = async (id) => {
    return await axios.put(`${axiosClient}/solicitudes/estado/${id}`)
}

export default axiosClient;