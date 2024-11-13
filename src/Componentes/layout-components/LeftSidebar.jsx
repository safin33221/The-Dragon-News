import { useEffect, useState } from "react";



const LeftSidebar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=> res.json())
        .then(data =>  setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h1 className="text-lg font-semibold ">All Category({categories.length})</h1>
            <div className="flex flex-col w-fit">
                {
                    categories.map(category => <button
                        className="btn my-3"
                        key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;