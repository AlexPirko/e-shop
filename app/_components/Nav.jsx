'use client';

import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import GlobalApi from '../_utils/GlobalApi';
import { useEffect, useState } from 'react';


const Nav = ({ containerStyles, linkStyles }) => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = () => {
        GlobalApi.getCategory().then((resp) => {
            setCategoryList(resp.data);
        });
    };
    return (
        <nav className={`${containerStyles}`}>
            {categoryList.map((cat, index) => {
                return (
                    <DropdownMenu key={index}>
                        <DropdownMenuTrigger asChild>
                            <Link
                                href={`${cat}`}
                                className={`${linkStyles}`}>
                                {cat}
                            </Link>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Choose Category</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Phone</DropdownMenuItem>
                            <DropdownMenuItem>TV</DropdownMenuItem>
                            <DropdownMenuItem>Audio</DropdownMenuItem>
                            <DropdownMenuItem>Headphones</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            })}
        </nav>
    );
};

export default Nav;
