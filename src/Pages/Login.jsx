import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='  flex justify-center items-center min-h-screen'>
            <div class="card bg-white w-full max-w-lg shrink-0 p-10 rounded-none">
                <h2 className='text-2xl font-semibold text-center'>Login your Account</h2>
                <form class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-semibold text-xl">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" required />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
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