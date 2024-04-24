import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function ProductCard({ product }) {

    return (
        <div className='flex flex-col min-h-screen my-10'>
            <div className='grid gap-6 lg:gap-12 flex-1'>
                <div className='w-full max-w-6xl mx-auto px-4 [&:not(:last-child)]:mb-2 lg:px-6'>
                    <div className='grid md:grid-cols-2 gap-6 items-start'>
                        <div className='grid gap-4 md:gap-10 items-start'>
                            <h1 className='font-bold text-2xl sm:text-3xl'>{product?.title}</h1>
                            <div className='flex items-center gap-4'>
                                {/* <div className='flex items-center gap-0.5'>
                                    <StarIcon className='w-5 h-5 fill-primary' />
                                    <StarIcon className='w-5 h-5 fill-primary' />
                                    <StarIcon className='w-5 h-5 fill-primary' />
                                    <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                                    <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                                </div> */}
                            </div>
                            <div className='hidden md:flex gap-4 items-start'>
                                <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
                                    <img
                                        alt='Preview thumbnail'
                                        className='aspect-[5/6] object-cover'
                                        height={120}
                                        src={product.image}
                                        width={100}
                                    />
                                    <span className='sr-only'>View Image 1</span>
                                </button>
                                <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
                                    <img
                                        alt='Preview thumbnail'
                                        className='aspect-[5/6] object-cover'
                                        height={120}
                                        src={product.image}
                                        width={100}
                                    />
                                    <span className='sr-only'>View Image 2</span>
                                </button>
                                <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
                                    <img
                                        alt='Preview thumbnail'
                                        className='aspect-[5/6] object-cover'
                                        height={120}
                                        src={product.image}
                                        width={100}
                                    />
                                    <span className='sr-only'>View Image 3</span>
                                </button>
                                <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
                                    <img
                                        alt='Preview thumbnail'
                                        className='aspect-[5/6] object-cover'
                                        height={120}
                                        src={product.image}
                                        width={100}
                                    />
                                    <span className='sr-only'>View Image 4</span>
                                </button>
                            </div>
                        </div>
                        <div className='hidden md:flex flex-col gap-3 items-start'>
                            <form className='grid gap-4 md:gap-10'>
                                <div className='grid gap-2'>
                                    <Label
                                        className='text-base'
                                        htmlFor='color'>
                                        Color
                                    </Label>
                                    <RadioGroup
                                        className='flex items-center gap-2'
                                        defaultValue='black'
                                        id='color'>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='color-black'>
                                            <RadioGroupItem
                                                id='color-black'
                                                value='black'
                                            />
                                            Black
                                        </Label>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='color-white'>
                                            <RadioGroupItem
                                                id='color-white'
                                                value='white'
                                            />
                                            White
                                        </Label>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='color-blue'>
                                            <RadioGroupItem
                                                id='color-blue'
                                                value='blue'
                                            />
                                            Blue
                                        </Label>
                                    </RadioGroup>
                                </div>
                                <div className='grid gap-2'>
                                    <Label
                                        className='text-base'
                                        htmlFor='size'>
                                        Size
                                    </Label>
                                    <RadioGroup
                                        className='flex items-center gap-2'
                                        defaultValue='m'
                                        id='size'>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='size-xs'>
                                            <RadioGroupItem
                                                id='size-xs'
                                                value='xs'
                                            />
                                            XS
                                        </Label>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='size-s'>
                                            <RadioGroupItem
                                                id='size-s'
                                                value='s'
                                            />
                                            S{'\n                                      '}
                                        </Label>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='size-m'>
                                            <RadioGroupItem
                                                id='size-m'
                                                value='m'
                                            />
                                            M{'\n                                      '}
                                        </Label>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='size-l'>
                                            <RadioGroupItem
                                                id='size-l'
                                                value='l'
                                            />
                                            L{'\n                                      '}
                                        </Label>
                                        <Label
                                            className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                                            htmlFor='size-xl'>
                                            <RadioGroupItem
                                                id='size-xl'
                                                value='xl'
                                            />
                                            XL
                                        </Label>
                                    </RadioGroup>
                                </div>
                                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                                    <Label
                                        className='text-base'
                                        htmlFor='quantity'>
                                        Price: ${product.price}
                                    </Label>
                                </div>
                                <div className='grid gap-2'>
                                    <Label
                                        className='text-base'
                                        htmlFor='quantity'>
                                        Quantity
                                    </Label>
                                    <Select defaultValue='1'>
                                        <SelectTrigger className='w-24'>
                                            <SelectValue placeholder='Select' />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='1'>1</SelectItem>
                                            <SelectItem value='2'>2</SelectItem>
                                            <SelectItem value='3'>3</SelectItem>
                                            <SelectItem value='4'>4</SelectItem>
                                            <SelectItem value='5'>5</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                                    <Button size='lg'>Add to cart</Button>
                                    <Button
                                        size='lg'
                                        variant='outline'>
                                        {/* <HeartIcon className='w-4 h-4 mr-2' /> */}
                                        Add to wishlist
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='grid gap-4 mt-10 md:gap-10 text-sm leading-loose'>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
