import { useQuery } from 'react-query';
import axios from '../configs/axios';

const getUserHistory = async () => {
    const { data } = await axios.get('/user/history');
    return data;
};

export default function useHistory() {
    return useQuery('history', getUserHistory, {
        refetchOnWindowFocus: false,
    });
}
