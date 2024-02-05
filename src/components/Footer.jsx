import RedesSociais from "./RedesSociais";
import { GiLotusFlower } from "react-icons/gi";
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-text">
                        <GiLotusFlower style={{ fontSize: 150 }} className="logo-icon" />
                    </div>
                    <div className="footer-text">
                        <h3>Sobre nós</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                            hic voluptatum, fugiat, tempora quo nemo labore dolor dolores
                            laudantium fugit delectus nesciunt rem eos tempore illo e
                            xercitationem fuga eum aspernatur!
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                        <RedesSociais />
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Feito por <a href="#"> Cássia Elen</a></p>
                </div>
            </footer>
        </>
    );
}

export default Footer