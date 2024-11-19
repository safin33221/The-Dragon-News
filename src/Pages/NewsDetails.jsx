import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Componentes/Header';
import RightSidebar from '../Componentes/layout-components/RightSidebar';

const NewsDetails = () => {
    const { data } = useLoaderData()

    const news = (data[0]);
   
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-3 w-11/12 mx-auto'>
                <section className='col-span-9'>
                    <div className="card bg-base-10">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-left ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">All news in this category</Link >
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;