import { Outlet } from "react-router-dom";
import Navbar from "../Componentes/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <nav className='w-11/12 mx-auto py-3'>
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;