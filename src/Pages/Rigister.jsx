import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Rigister = () => {

    const { createUser,setUser } = useContext(AuthContext)



    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

       

        createUser(email,password)
        .then(result => {
            const user = result.user
            setUser(user)
        })
        .catch((error) =>{
            const errorCode = error.code
            const errorMsg= error.message
            console.log(errorMsg);
        })

    }
    return (
        <div className='  flex justify-center items-center min-h-screen'>
            <div class="card bg-white w-full max-w-lg shrink-0 p-10 rounded-none">
                <h2 className='text-2xl font-semibold text-center'>Register Now</h2>
                <form onSubmit={handleSubmit} class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-semibold text-xl">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-semibold text-xl">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" class="input input-bordered" required />
                    </div>
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

                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-neutral rounded-none ">Login</button>
                    </div>
                </form>
                <label class="label">
                    <p className='ml-8'>Already Have an Accoutn <Link to='/auth/login' className='text-red-600'>LogIn</Link></p>
                </label>
            </div>
        </div>
    );
};

export default Rigister;