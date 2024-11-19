import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext)
    const [error, setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError({ ...error, login: err.code })
            })
    }
    return (
        <div className='  flex justify-center items-center min-h-screen'>
            <div class="card bg-white w-full max-w-lg shrink-0 p-10 rounded-none">
                <h2 className='text-2xl font-semibold text-center'>Login your Account</h2>
                <form onSubmit={handleLogin} class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-semibold text-xl">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" class="input input-bordered" required />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {
                            error.login &&
                            <label class="label text-red-500">
                                {error.login}
                            </label>
                        }
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-neutral rounded-none ">Login</button>
                    </div>

                </form>
                <p className='ml-8'>Don't Have an Account <Link to='/auth/register' className='text-red-600 '>Register</Link></p>
            </div>
        </div>

    );
};

export default Login;