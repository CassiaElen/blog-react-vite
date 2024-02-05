import Header from "../components/Header";
import { Link } from "react-router-dom";
import CarouselArt from "../components/CarouselArt";
import CardLateral from "../components/CardLateral";
import planta from '../img/pexels-akshar-dave-1076503.jpg';
import Footer from '../components/Footer';
import imgjarsonhos from '../img/jardimdesonhos1.jpg';
import imginvermenor from '../img/imginvernomenor.jpg';
import jarverti from '../img/jardimVertical1.jpg';
import jardimverticalmenor from '../img/jardimVerticalmenor.jpg';
import jardimdesonhosmenor from '../img/jardimdesonhosmenor.jpg';
import culltiveconhemenor from '../img/cultivesonhosMenor.jpg';
function DicasCultivo() {
    return (
        <div>
            <Header />
            <main>
                <CarouselArt />
                <section className="section">
                    <div style={{ width: '60%', }}>
                        <Link to={'/jardimsonhos'}>
                            <CardLateral altura={300} largura={500} titulo={"Jardim de sonhos: Inspirações e ideias para transformar seu espaço"} descricao={"Dica de cultivo"} imagem={imgjarsonhos} fonte={50} />
                        </Link>
                        <Link to={'/cultiveconhecimento'}>
                            <CardLateral altura={300} largura={500} titulo={"Cultive conhecimentos: Dicas infalíveis para iniciantes em jardinagem"} descricao={"Dica de cultivo"} imagem={planta} fonte={50} />
                        </Link>
                        <Link to={'/jardimvertical'}>
                            <CardLateral altura={300} largura={500} titulo={"Jardim vertical: transformas espaços pequenos"} descricao={"Dica de cultivo"} imagem={jarverti} fonte={50} />
                        </Link>
                    </div>
                    <div style={{ width: '20%' }}>
                        <p>Posts mais compartilhados</p>
                        <Link to={'/jardimvertical'}>
                            <CardLateral altura={100} largura={200} titulo={"Jardim Vertical: Transforma espaços pequenos"} descricao={"Dica de cultivo"} imagem={jardimverticalmenor} fonte={20} />
                        </Link>
                        <Link to={'/jardimsonhos'}>
                            <CardLateral altura={100} largura={200} titulo={"Jardim de Sonhos:tudo pode udar seu espaço"} descricao={"Sazonalidade"} imagem={jardimdesonhosmenor} fonte={20} />
                        </Link>
                        <Link to={'/cultiveconhecimento'}>
                            <CardLateral altura={100} largura={200} titulo={"Cultive conhecimentos: Dicas infalíveis para iniciantes em jardinagem"} descricao={"Dica de cultivo"} imagem={culltiveconhemenor} fonte={20} />
                        </Link>
                        <Link to={'/jardiminverno'}>
                            <CardLateral altura={100} largura={200} titulo={"Jardim de inverno:Como manter a beleza natural mesmo nos dias frios"} descricao={"Sazonalidade"} imagem={imginvermenor} fonte={20} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
export default DicasCultivo