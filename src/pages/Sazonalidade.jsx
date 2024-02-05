import Header from "../components/Header";
import { Link } from "react-router-dom";
import CarouselArt from "../components/CarouselArt";
import CardLateral from "../components/CardLateral";
import Footer from '../components/Footer';
import imginver from '../img/imginverno1.jpg';
import imginvermenor from '../img/imginvernomenor.jpg';
import plantaesta1 from '../img/plantaestacao1.jpg';
import plantaverao1 from '../img/plantaverao1.jpg';
import jardimverticalmenor from '../img/jardimVerticalmenor.jpg';
import jardimdesonhosmenor from '../img/jardimdesonhosmenor.jpg';
import culltiveconhemenor from '../img/cultivesonhosMenor.jpg';
function Sazonalidade() {
    return (
        <div>

            <Header />
            <main>
                <CarouselArt />
                <section className="section">
                    <div style={{ width: '60%', }}>
                        <Link to={'/jardiminverno'}>
                            <CardLateral altura={300} largura={500} titulo={"Jardim de inverno:Como manter a beleza natural mesmo nos dias frios"} descricao={"Sazonalidade"} imagem={imginver} fonte={50} />
                        </Link>
                        <Link to={'/plantaestacao'}>
                            <CardLateral altura={300} largura={500} titulo={"O que plantar em cada estação do ano"} descricao={"Sazonalidade"} imagem={plantaesta1} fonte={50} />
                        </Link>
                        <Link to={'/plantaverao'}>
                            <CardLateral altura={300} largura={500} titulo={"Plantas que ama o verão"} descricao={"Sazonalidade"} imagem={plantaverao1} fonte={50} />
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

export default Sazonalidade