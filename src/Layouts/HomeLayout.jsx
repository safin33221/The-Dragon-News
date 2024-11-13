
import { Outlet } from 'react-router-dom';
import Header from '../Componentes/Header';
import LeftSidebar from '../Componentes/layout-components/LeftSidebar';

import RightSidebar from '../Componentes/layout-components/RightSidebar';
import LeatestNews from '../Componentes/LeatestNews';
import Navbar from '../Componentes/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
            </header>


            <section className='w-11/12 mx-auto py-3'>
                <LeatestNews></LeatestNews>
            </section>


            <nav className='w-11/12 mx-auto py'>
                <Navbar></Navbar>
            </nav>
            

            <main className=' w-11/12 mx-auto grid grid-cols-12 gap-4'>
                <aside className='col-span-3 '>
                   <LeftSidebar></LeftSidebar> 
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 '>
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;