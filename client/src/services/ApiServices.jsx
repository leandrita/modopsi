import axios from 'axios';

// axios.defaults.headers.common = {
//     "ngrok-skip-browser-warning": "11111",
// };

const endpoint = 'http://127.0.0.1:8000/api';

export async function getAllTherapies() {
    const response = await axios.get(`${endpoint}/therapies`);
    return response.data;
}

export async function getTherapyById(id) {
    try {
        const response = await axios.get(`${endpoint}/therapy/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getAllProfessionals() {
    const response = await axios.get(`${endpoint}/professionals`);
    return response.data;
}

export async function getProfessionalById(id) {
    try {
        const response = await axios.get(`${endpoint}/professional/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}