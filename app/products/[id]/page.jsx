import React from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import ProductCard from '@/app/_components/ProductCard';

const Product = async ({ params }) => {
    const allProducts = await GlobalApi.getProducts();
    const id = params.id;
    const product = allProducts.find((item) => item.id === +id);
    
    if (!product) {
        return <h1>Товар не знайдено</h1>;
    }

    return (
        <div className='container'>
            <ProductCard product={product} />
        </div>
    );
};

export default Product;
