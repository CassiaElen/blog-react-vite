import Header from "../components/Header";
import Footer from "../components/Footer";
import planta from '../img/pexels-akshar-dave-1076503.jpg';
import { Link } from "react-router-dom";
import { GiLotusFlower } from "react-icons/gi";
import RedesSociais from "../components/RedesSociais";
import ImgCard from "../components/ImgCard";
import HeaderaSection from "../components/HeaderaSection";
import imginver from '../img/jardimdesonhos2.jpg';
import inverno from '../img/imginverno1.jpg';
function CultiveConhecimento(){
    return(
        <>
         <Header />
        <main>
            <section className="section">
                <div style={{
                    display: 'flex',
                    width: '80%'
                }}>
                    <div style={{
                        width: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div style={{ fontSize: 100, color: '#6c996f' }}>
                            <GiLotusFlower />
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: 200 }}>
                            <RedesSociais />
                        </div>
                    </div>
                    <div style={{
                        width: '60%',
                        fontSize: 22,
                        paddingRight: 20
                    }}>
                        <HeaderaSection titulo="Cultive Conhecimento"/>
                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores rem eum
                            voluptatem quidem possimus nemo inventore soluta suscipit aperiam rerum, iste esse
                            cupiditate. Dolores obcaecati maiores ducimus unde sapiente.</p>
                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in sint odit
                            autem culpa nesciunt repellendus rem provident assumenda accusantium praesentium
                            fugiat fuga non. Voluptas, adipisci impedit? Dicta, voluptates Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Iusto explicabo enim iste nesciunt id porro delectus. Eveniet error, fugiat fugit
                            voluptas laboriosam ratione corrupti esse dicta aperiam quisquam soluta reprehenderit.</p>
                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor facilis sunt
                            minus itaque. Voluptatem veritatis accusamus ipsa exercitationem magnam maxime
                            obcaecati perferendis impedit, modi voluptates iusto. Aut, earum!</p>
                        <img src={planta} alt="" style={{ width: '100%', borderRadius:20, margin:20 }} />

                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores rem eum
                            voluptatem quidem possimus nemo inventore soluta suscipit aperiam rerum, iste esse
                            cupiditate. Dolores obcaecati maiores ducimus unde sapiente.</p>
                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in sint odit
                            autem culpa nesciunt repellendus rem provident assumenda accusantium praesentium
                            fugiat fuga non. Voluptas, adipisci impedit? Dicta, voluptates Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Iusto explicabo enim iste nesciunt id porro delectus. Eveniet error, fugiat fugit
                            voluptas laboriosam ratione corrupti esse dicta aperiam quisquam soluta reprehenderit.</p>
                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor facilis sunt
                            minus itaque. Voluptatem veritatis accusamus ipsa exercitationem magnam maxime
                            obcaecati perferendis impedit, modi voluptates iusto. Aut, earum!</p>

                        <img src={imginver} alt="" style={{ width: '100%' , borderRadius:20, margin:20 }} />

                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores rem eum
                            voluptatem quidem possimus nemo inventore soluta suscipit aperiam rerum, iste esse
                            cupiditate. Dolores obcaecati maiores ducimus unde sapiente.</p>
                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in sint odit
                            autem culpa nesciunt repellendus rem provident assumenda accusantium praesentium
                            fugiat fuga non. Voluptas, adipisci impedit? Dicta, voluptates Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Iusto explicabo enim iste nesciunt id porro delectus. Eveniet error, fugiat fugit
                            voluptas laboriosam ratione corrupti esse dicta aperiam quisquam soluta reprehenderit.</p>
                        <p className="artigo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor facilis sunt
                            minus itaque. Voluptatem veritatis accusamus ipsa exercitationem magnam maxime
                            obcaecati perferendis impedit, modi voluptates iusto. Aut, earum!</p>

                    </div>
                    <div style={{
                        width: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft:50
                    }}>
                        <Link style={{marginBottom:80}} to={'/cultiveconhecimento'}>
                            <ImgCard altura={200} largura={300} imagem={planta} descricao="Dica de cultivo" titulo="Cultive Conhecimento" />
                        </Link>
                        <Link style={{marginBottom:80}} to={'/jardimsonhos'}>
                            <ImgCard altura={200} largura={300} imagem={imginver} descricao="Dica de cultivo" titulo="Jardim de sonhos" />
                        </Link>
                        <Link style={{marginBottom:80}} to={'/jardiminverno'}>
                            <ImgCard altura={200} largura={300} imagem={inverno} descricao="Dica de cultivo" titulo="Jardim de inverno" />
                        </Link>
                        
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
    )
}

export default CultiveConhecimento