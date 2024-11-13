import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Login</h2>
            <div className="flex flex-col gap-3">
                <button className="btn btn-outline">
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn btn-outline">
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;