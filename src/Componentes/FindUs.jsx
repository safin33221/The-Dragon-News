import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">Find us on</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;