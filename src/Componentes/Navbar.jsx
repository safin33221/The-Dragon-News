
import { NavLink } from 'react-router-dom';
import usericon from '../assets/user.png';

const Navbar = () => {
    return (

        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="link flex space-x-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/abouts'>Abouts</NavLink>

            </div>
            <div className="flex gap-3 items-center">
                <div>
                    <img src={usericon} alt="" />
                </div>
                <button className='btn btn-neutral rounded-lg '>Login</button>
            </div>
        </div>

    );
};

export default Navbar;