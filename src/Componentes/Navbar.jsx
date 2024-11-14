
import { Link, NavLink } from 'react-router-dom';
import usericon from '../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user,logOutUser } = useContext(AuthContext)
    return (

        <div className='flex justify-between items-center'>
            <div className="">
                {user && user.email}
            </div>
            <div className=" flex space-x-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/abouts'>Abouts</NavLink>

            </div>
            <div className="flex gap-3 items-center">
                <div>
                    <img src={usericon} alt="" />
                </div>
                {
                    user && user.email ?
                        <button onClick={logOutUser} className='btn btn-neutral rounded-lg '>LogOut</button>
                        :
                        <Link to='/auth/login' className='btn btn-neutral rounded-lg '>Login</Link>
                }

            </div>
        </div>

    );
};

export default Navbar;