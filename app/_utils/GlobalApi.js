const { default: axios } = require('axios');

const axiosClient = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
});

const getProducts = () =>
    axiosClient.get('/').then((resp) => {
        return resp.data;
    });
const getCategory = () => axiosClient.get('/categories');

export default { getProducts, getCategory };
