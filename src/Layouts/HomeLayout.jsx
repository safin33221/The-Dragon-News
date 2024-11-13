
import Header from '../Componentes/Header';
import LeatestNews from '../Componentes/LeatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section>
                    <LeatestNews></LeatestNews>
                </section>
            </header>
        </div>
    );
};

export default HomeLayout;