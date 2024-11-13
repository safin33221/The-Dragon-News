import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LeatestNews = () => {
    return (
        <div className='flex gap-3 items-center bg-gray-100 p-3 rounded-lg '>
            <p className='rounded-sm bg-[#D72050] py-2 px-3 flex justify-center items-center'>Leatest</p>
            <p>
                <Marquee className='space-x-10' pauseOnHover={true} speed={50}>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi.</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi.</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi.</Link>
                </Marquee>
            </p>
        </div>
    );
};

export default LeatestNews;