const { default: axios } = require('axios');

const axiosClient = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
});

const getProducts = () =>
    axiosClient.get('/').then((resp) => {
        return resp.data;
    });
const getCategory = () => axiosClient.get('/categories');
const getProduct = () => axiosClient.get('/products/id');

export default { getProducts, getCategory, getProduct };
