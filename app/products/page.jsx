import Filters from '@/app/_components/Filters';
import React from 'react';
import GlobalApi from '../_utils/GlobalApi';
import ProductItem from '@/app/_components/ProductItem';

const Products = async () => {
    const allProducts = await GlobalApi.getProducts();

    return (
        <div className='container grid grid-cols-5 gap-2'>
            <Filters  />
            <div className='col-span-3'>
                <h2 className='text-2xl font-semibold my-4'>All Products</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {allProducts.map((item) => (
                    <ProductItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            </div>
        </div>
    );
};

export default Products;
