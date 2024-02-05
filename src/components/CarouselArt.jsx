import { Carousel } from 'antd';
import planta from '../img/pexels-michael-heinrich-72509.jpg';
import flor from '../img/pexels-pixabay-56866.jpg';
import planta3 from '../img/pexels-maarten-van-den-heuvel-2284170.jpg';
import planta2 from '../img/pexels-daniel-spase-1292829.jpg';
const contentStyle = {
    height: '600px',
}
const CarouselArt = () => (
    <Carousel autoplay>
        <div>
            <img src={planta} style={contentStyle} />
        </div>
        <div>
            <img src={flor} style={contentStyle} />
        </div>
        <div>
            <img src={planta2} style={contentStyle} />
        </div>
        <div>
            <img src={planta3} style={contentStyle} />
        </div>
    </Carousel>
);
export default CarouselArt;