import { FaFacebookF, FaTiktok, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const RedesSociais = () => {
    return (
        <>
            <button className="rede-social-btn">
                <FaFacebookF/>
            </button>
            <button className="rede-social-btn">
                <FaInstagram/>
            </button>
            <button className="rede-social-btn">
                <FaPinterest/>
            </button>
            <button className="rede-social-btn">
                <FaSquareXTwitter/>
            </button>
            <button className="rede-social-btn"> 
                 <FaTiktok/>
            </button>
            <button className="rede-social-btn">
                <FaYoutube/>
            </button>
        </>
    );
}

export default RedesSociais