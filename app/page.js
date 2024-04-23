import GlobalApi from './_utils/GlobalApi';
import MainSlider from './_components/MainSlider';
import PopularProducts from './_components/PopularProducts';

export default async function Home() {
    const allProducts = await GlobalApi.getProducts();

    return (
        <div className='container'>            
            <PopularProducts allProducts={allProducts} />
            <MainSlider />
        </div>
    );
}
