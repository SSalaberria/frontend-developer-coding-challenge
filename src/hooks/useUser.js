import { useQuery } from 'react-query';
import axios from '../configs/axios';

const getUser = async () => {
    const { data } = await axios.get('/user/me');
    return data;
};

export default function useUser() {
    return useQuery('user', getUser, {
        refetchOnWindowFocus: false,
    });
}
