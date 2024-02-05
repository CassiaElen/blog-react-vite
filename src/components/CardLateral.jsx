import PropTypes from 'prop-types';
import { useState } from 'react';

const CardLateral = ({ altura, largura, imagem, titulo, descricao, fonte }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    const zoomLevel = isHovered ? 1.1 : 1;
    return (
        <>
            <div style={{ height: altura, margin:'40px 0px 0px 0px', display: 'flex' }}>
                <div style={{ width: largura,}}>
                <div
                    style={{
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                    }}>
                    <img
                        alt="example"
                        src={imagem}
                        style={{
                            borderRadius: 10,
                            width: '100%',
                            height: '100%',
                            transform: `scale(${zoomLevel})`,
                            transition: 'transform 0.3s ease-in-out',
                            cursor: 'pointer',
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    />

                </div>
                </div>
                <div style={{
                    width:500,
                    marginLeft:30,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                }}>
                    <p style={{ color: 'gray' }}>{descricao}</p>
                    <h1 style={{ fontSize:fonte}} className='title-card'>{titulo}</h1>
                </div>
            </div>
        </>
    );
}

CardLateral.propTypes = {
    altura: PropTypes.number.isRequired,
    largura: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    fonte: PropTypes.number.isRequired,
};

export default CardLateral