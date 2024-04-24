import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProductItem = ({ item }) => {
    return (
        <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg'>
            <Image
                src={item?.image}
                width={300}
                height={150}
                alt='image'
                className='h-[220px] w-[300px] object-contain'
            />
            <Link
                href={`/products/${item?.id}`}
                passHref
                legacyBehavior>
                <h3 className='text-lg cursor-pointer'>{item?.title}</h3>
            </Link>
            <h4 className='font-semibold'>${item?.price}</h4>
            <Button
                className='mt-auto'
                variant='outline'>
                Add To Cart
            </Button>
        </div>
    );
};

export default ProductItem;
