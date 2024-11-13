
import Header from '../Componentes/Header';
import LeatestNews from '../Componentes/LeatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto py-3'>
                    <LeatestNews></LeatestNews>
                </section>
            </header>
        </div>
    );
};

export default HomeLayout;