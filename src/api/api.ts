import axios from 'axios';
import { ExcuseParameters } from '../interfaces/excuseParameters';

export const requestExcuse = async (formData: ExcuseParameters) => {
    try {
        const response = await axios.post('https://intense-reaches-72700-4d8b835d637c.herokuapp.com/generate-excuse', formData);
        return response.data.excuse;
    } catch (error) {
        console.error('Error fetching excuse:', error);
        return null;
    }
};
