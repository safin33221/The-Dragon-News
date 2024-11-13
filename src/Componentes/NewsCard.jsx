
import { FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa6';
const NewsCard = ({ news }) => {
    const { title, author, rating, total_view, image_url, details } = news;

    return (
        <div className="max-w-md mx-auto my-6 p-4 shadow-lg rounded-lg bg-white border border-gray-200">
            {/* Author Info */}
            <div className="flex items-center mb-3">
                <img src={author.img} alt="Author" className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                    <p className="font-semibold">{author.name}</p>
                    <p className="text-gray-500 text-xs">{new Date(author.published_date).toLocaleDateString()}</p>
                </div>
                <div className="ml-auto text-gray-400">
                    <button className="btn btn-circle btn-ghost btn-xs">
                        <FaBookmark className="text-gray-500" />

                    </button>
                    <button className="btn btn-circle btn-ghost btn-xs">
                        <FaShareAlt className="text-gray-500" />

                    </button>
                </div>
            </div>

            {/* Article Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-3">
                {title}
            </h2>

            {/* Thumbnail Image */}
            <img src={image_url} alt="Article" className="w-full h-48 object-cover rounded-lg mb-3" />

            {/* Article Details */}
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {details}
            </p>

            {/* Read More Button */}
            <button className="text-red-500 font-semibold">Read More</button>

            {/* Rating and Views */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    <span className="font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                    <FaEye className="mr-1" />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;


