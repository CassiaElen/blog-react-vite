import { Link } from "react-router-dom";
import { GiLotusFlower } from "react-icons/gi";
import { FaFacebookF, FaTiktok, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { Input, ConfigProvider } from 'antd';
const { Search } = Input;

const Header = () => {

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#f7e8a6'
                },
            }}
        >
            <header className="header">
                <div className="header-top">
                    <div className="logo">
                        <GiLotusFlower className="logo-icon" />
                    </div>
                    <div>
                        <Search
                            placeholder="O que procura?"
                            allowClear
                            enterButton
                            size="large"
                            style={{ width: 600 }}
                        />
                    </div>

                    <div className="redes-sociais">
                        <FaFacebookF style={{ margin: 10 }} />
                        <FaYoutube style={{ margin: 10 }} />
                        <FaInstagram style={{ margin: 10 }} />
                        <FaTiktok style={{ margin: 10 }} />
                        <FaPinterest style={{ margin: 10 }} />
                    </div>
                </div>
                <div className="header-bottom">
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <Link className="link" to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link className="link" to={"/dicascultivo"}>Dicas de Cultivo</Link>
                            </li>
                            <li>
                                <Link className="link" to={"/sazonalidade"}>Sazonalidade</Link>
                            </li>               
                        </ul>
                    </nav>
                </div>

            </header>
        </ConfigProvider>
    );
}

export default Header