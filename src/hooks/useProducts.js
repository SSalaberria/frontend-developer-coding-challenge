import { useQuery } from 'react-query';
import axios from '../configs/axios';

const getProducts = async () => {
    const { data } = await axios.get('/products');
    return data;
};

export default function useProducts() {
    return useQuery('products', getProducts, {
        refetchOnWindowFocus: false,
    });
}
