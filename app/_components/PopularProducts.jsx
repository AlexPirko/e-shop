import ProductItem from './ProductItem';

const PopularProducts = ({ allProducts }) => {

    return (
        <div className='my-16'>
            <h2 className='font-bold text-2xl my-4'>Our Popular Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {allProducts.slice(0, 8).map((item) => (
                    <ProductItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;
