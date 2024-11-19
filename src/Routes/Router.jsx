
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import Rigister from '../Pages/Rigister';
import NewsDetails from '../Pages/NewsDetails';
import PrivetsRouts from './PrivetsRouts';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/newsDetails/:id',
        element:
            <PrivetsRouts>
                <NewsDetails></NewsDetails>
            </PrivetsRouts>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Rigister></Rigister>
            },
        ]
    },
])

export default Router;