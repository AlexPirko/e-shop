'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

const MainSlider = () => {
    const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[plugin.current]}
            className='my-4'>
            <CarouselContent>
                <CarouselItem>
                    <Image
                        src='/img/slide1.jpeg'
                        width={1000}
                        height={280}
                        alt='slider'
                        className='w-full h-[280px] object-cover rounded-xl'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src='/img/slide2.jpg'
                        width={1000}
                        height={280}
                        alt='slider'
                        className='w-full h-[280px] object-cover rounded-xl'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src='/img/slide1.jpeg'
                        width={1000}
                        height={280}
                        alt='slider'
                        className='w-full h-[280px] object-cover rounded-xl'
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
};

export default MainSlider;
