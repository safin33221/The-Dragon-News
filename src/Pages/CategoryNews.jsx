import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Componentes/NewsCard';

const CategoryNews = () => {
    const {data:newses} = useLoaderData()
    
    return (
        <div>
            <h2 className='text-xl font-bold'>Dragon News Home</h2>
            <div>
                {
                    newses.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;