import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <img className="w-2/5 my-2" src={logo} alt="" />
                <h2 className="text-gray-400 text-lg">Journalism Without Fear or Favour</h2>
                <p>{moment().format('dddd,MMMM Do YYYY')}</p>
            </div>
            
        </div>
    );
};

export default Header;