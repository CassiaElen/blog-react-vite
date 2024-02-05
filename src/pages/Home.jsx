import ImgCard from "../components/ImgCard";
import Header from "../components/Header";
import RedesSociais from "../components/RedesSociais";
import HeaderSection from "../components/HeaderaSection";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { GiLotusFlower } from "react-icons/gi";
import Planta from "../img/pexels-photomix-company-94847.jpg"
import jardiminverno from '../img/imginverno2.jpg';
import cultive from '../img/jardimdesonhos1.jpg';
import jardimsonhos from '../img/jardimdesonhos2.jpg';
import jardimverti from '../img/jardimVertical1.jpg';
import plantaesta from '../img/plantaestacao1.jpg';
import PlantaVerao from "../img/plantaverao1.jpg";
function Home() {
    return (
        <div>
            <Header />
            <main>
                <section className="section">
                    <div style={{ width: '80%' }}>
                        <HeaderSection titulo={"Posts mais recentes"} link={"Veja todos"} />
                        <div className="sec-postrecent" style={{ display: 'flex',}}>
                            <div>
                                <Link to={'/cultiveconhecimento'}>
                                    <ImgCard
                                        altura={500}
                                        largura={800}
                                        imagem={Planta}
                                        titulo={"Cultive conhecimento:Dicas infaliveis para iniciantes em jardinagem"}
                                        descricao={"Dica de cultivo"}
                                     />
                                </Link>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Link to={'/jardiminverno'}>
                                    <ImgCard
                                        altura={300}
                                        largura={300}
                                        imagem={jardiminverno}
                                        titulo={"Jardim de Inverno"}
                                        descricao={"Sazonalidade"} />
                                </Link>
                                <Link to={'/jardimsonhos'}>
                                    <ImgCard
                                        altura={300}
                                        largura={300}
                                        imagem={jardimsonhos}
                                        titulo={"Jardim de Sonhos"}
                                        descricao={"Dicas de cultivo"} />
                                </Link>
                                <Link to={'/jardimvertical'}>
                                    <ImgCard
                                        altura={300}
                                        largura={300}
                                        imagem={jardimverti}
                                        titulo={"Jardim Vertical"}
                                        descricao={"Dicas de cultivo"} />
                                </Link>
                                <Link to={'/jardiminverno'}>
                                    <ImgCard
                                        altura={300}
                                        largura={300}
                                        imagem={plantaesta}
                                        titulo={"O que plantar em cada estação"}
                                        descricao={"Sazonalidade"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ backgroundColor: '#fff5cb' }} >
                    <div style={{
                        width: '80%',
                        display: 'flex',
                    }}>
                        <div className="section-redes-sociais">
                            <div>
                                <h1 style={{
                                    fontSize: 60
                                }}>Siga-nos em nossas redes sociais </h1>
                                <p>Para ficar dentro de tudo e nao perder nenhuma novidade</p>
                            </div>
                        </div>
                        <div className="section-redes-sociais">
                            <div style={{ width: 300, display: 'flex', flexWrap: 'wrap' }}>
                                <RedesSociais />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div style={{
                        width: '80%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                        marginBottom: 80
                    }}>
                        <h1 style={{ fontSize: 50 }}>Descubra mais coisas em</h1>
                        <div>
                            <HeaderSection titulo={"Dicas de cultivo"} link={"Veja mais"} />
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between'
                            }}>
                                <Link to={'/cultiveconhecimento'}>
                                    <ImgCard
                                        altura={400}
                                        largura={450}
                                        imagem={cultive}
                                        titulo={"Cultive Conhecimento"}
                                        descricao={"Dica de cultivo"} />
                                </Link>
                                <Link to={'/jardimsonhos'}>
                                    <ImgCard
                                        altura={400}
                                        largura={450}
                                        imagem={jardimsonhos}
                                        titulo={"Jardim de Sonhos"}
                                        descricao={"Dica de cultivo"} />
                                </Link>
                                <Link to={'/jardimvertical'}>
                                    <ImgCard
                                        altura={400}
                                        largura={450}
                                        imagem={jardimverti}
                                        titulo={"Jardim vertical"}
                                        descricao={"Dica de cultivo"} />
                                </Link>
                            </div>
                        </div>
                        <div style={{
                            marginTop: 140
                        }}>
                            <HeaderSection titulo={"Sazonalidade"} link={"Veja mais"} />
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between'
                            }}>
                                <Link to={'/plantaverao'}>
                                    <ImgCard
                                        altura={400}
                                        largura={450}
                                        imagem={PlantaVerao}
                                        titulo={"Plantas que amam o verão"}
                                        descricao={"Sazonalidade"} />
                                </Link>
                                <Link to={'/jardiminverno'}>
                                    <ImgCard
                                        altura={400}
                                        largura={450}
                                        imagem={jardiminverno}
                                        titulo={"Jardim de Inverno"}
                                        descricao={"Sazonalidade"} />
                                </Link>
                                <Link to={'/plantaestacao'}>
                                    <ImgCard
                                        altura={400}
                                        largura={450}
                                        imagem={plantaesta}
                                        titulo={"Saiba o que plantar em cada estacao"}
                                        descricao={"Sazonalidade"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div style={{
                        background: '#f7e8a6',
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 40,
                        marginBottom: 50,
                        boxShadow: '10px 20px 30px gray'

                    }}>
                        <GiLotusFlower style={{
                            fontSize: 130,
                            marginTop: 50,
                            color: "#6c996f"
                        }} />
                        <h1 style={{ fontSize: 50, color: '#6c996f', margin: 5 }}>Lorem ipsum dolor sit amet consectetur </h1>
                        <p style={{ color: '#6c996f', margin: 5, marginBottom: 50 }}>adipisicing elit. Fuga adipisci dignissimos, iste, quidem aperiam,
                            doloremque tenetur perspiciatis <br></br>voluptate dolorem error libero eligendi v
                            eritatis itaque quia similique totam minima quasi aut.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>

    );
}
export default Home